import {Component, OnInit} from '@angular/core';
import {NftService} from "../../service/nft/nft.service";
import {Nft} from "../../model/nft.model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit{

  nftList!: Nft[]
  first!: string
  last!: string
  next!: string
  prev!: string
  isLoading: boolean = false

  constructor(private nftService : NftService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    let myTitle: HTMLElement|null = document.querySelector('.short');
    myTitle!.style.opacity = '1';




    this.nftService.getAllNfts()
        .then(response => {
          this.nftList = response.nfts
          this.first = response.first
          this.last = response.last
          this.next = response.next
          this.prev = response.prev

        })
  }

    onScroll() {
      if(this.next && !this.isLoading){
          this.isLoading = true
          let nextPage = this.next.split('/api/nfts?page=')[1]
          this.nftService.getAllNfts(nextPage)
              .then(response => {
                  this.nftList.push(...response.nfts)
                  this.first = response.first
                  this.last = response.last
                  this.next = response.next
                  this.prev = response.prev
                  this.isLoading = false
              })
      }
    }

    onChangeSearch(e: any) {
        const filter: HTMLInputElement | null = document.querySelector('.form-select')
        if(e.target.value.length >= 3){
            let searchFilter = ''
            switch(filter!.value){
                case 'groupe.name':
                    searchFilter = 'nfts?page=1&' + filter!.value + '=' + e.target.value
                    break
                case 'groupe.genre.name':
                    searchFilter = 'nfts?page=1&' + filter!.value + '=' + e.target.value
                    break
                case 'name':
                    searchFilter = 'nfts?page=1&' + filter!.value + '=' + e.target.value
                    break
                default:
                    searchFilter = 'nfts?page=1'
            }
            this.nftService.getNftByPartial(searchFilter)
                .then(response => {
                    this.nftList = response.nfts
                    this.first = response.first
                    this.last = response.last
                    this.next = response.next
                    this.prev = response.prev
                    console.log(response)
                })
        }else{
            this.nftService.getAllNfts()
                .then(response => {
                    this.nftList = response.nfts
                    this.first = response.first
                    this.last = response.last
                    this.next = response.next
                    this.prev = response.prev
                })
        }
    }

    filterChange(e: any) {
        const inputSearch: HTMLInputElement|null = document.querySelector('.search-bar')
        if(inputSearch!.value.length >= 3){
            let searchFilter = ''
            switch(e.target.value){
                case 'groupe.name':
                    searchFilter = 'nfts?page=1&' + e.target.value + '=' + inputSearch!.value
                    break
                case 'groupe.genre.name':
                    searchFilter = 'nfts?page=1&' + e.target.value + '=' + inputSearch!.value
                    break
                case 'name':
                    searchFilter = 'nfts?page=1&' + e.target.value + '=' + inputSearch!.value
                    break
                default:
                    searchFilter = 'nfts?page=1'
            }
            this.nftService.getNftByPartial(searchFilter)
                .then(response => {
                    this.nftList = response.nfts
                    this.first = response.first
                    this.last = response.last
                    this.next = response.next
                    this.prev = response.prev
                    console.log(response)
                })
        }else{
            this.nftService.getAllNfts()
                .then(response => {
                    this.nftList = response.nfts
                    this.first = response.first
                    this.last = response.last
                    this.next = response.next
                    this.prev = response.prev
                })
        }
    }
}
