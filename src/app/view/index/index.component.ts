import {Component, OnInit} from '@angular/core';
import {Nft} from "../../model/nft.model";
import {NftResponsePromise, NftService} from "../../service/nft/nft.service";
import {AuthService} from "../../service/auth/auth.service";
import anime, {AnimeInstance} from "animejs";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  nfts$!: Promise<NftResponsePromise | void>
  nftList!: Nft[]
  firstCar: Nft[] = []
  secondCar: Nft[] = []
  thirdCar: Nft[] = []

  animation!: AnimeInstance


  constructor(private nftService: NftService, private authService: AuthService) {
  }

  ngOnInit() {
    this.nfts$ = this.nftService.getLastsNfts()
      .then(response => {
        this.nftList = response.nfts

        for (let i = 0; i < this.nftList.length; i++) {
          if (i < 9) {
            this.firstCar.push(this.nftList[i])
          } else if (i > 8 && i < 18) {
            this.secondCar.push(this.nftList[i])
          } else if (i > 17 && i < 27) {
            this.thirdCar.push(this.nftList[i])
          }
        }

      })

    this.animation = anime({
      targets: '.vinyle',
      translateX: 150,
      rotate: '1turn',
      direction: 'alternate',
      duration: 1000,
      autoplay: false,
    });


      /*
      * Fonction qui gère l'affichage ou non du titre dans le header selon si le titre au mileu de page est visible
       */
      function createNewDivOnIntersection() {
          // Récupération de la div cible
          const scrollTarget: HTMLElement|null = document.querySelector('#last');
          const title: HTMLElement|null = document.querySelector('.main-title');

          // Création de l'observer avec une fonction callback
          const observer = new IntersectionObserver(entries => {
              // Si la div cible est visible à l'écran
              if (entries[0].isIntersecting) {
                  let myTitle: HTMLElement|null = document.querySelector('.short');
                  myTitle!.style.opacity = '0';
              }else{
                  let myTitle: HTMLElement|null = document.querySelector('.short');
                  myTitle!.style.opacity = '1';
              }
          });
          // Ajout de la div cible à l'observer
          observer.observe(title!);
      }
      // Appel de la fonction pour créer une nouvelle div lorsqu'une div avec la classe "scroll-target" devient visible à l'écran
      createNewDivOnIntersection();
  }


  vinyleAnimation() {
    this.animation.play()
  }


}

