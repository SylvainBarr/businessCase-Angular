import {Component, OnInit} from '@angular/core';
import {filter, Observable, pairwise} from "rxjs";
import {Nft, NftExtended} from "../../model/nft.model";
import {NftService} from "../../service/nft/nft.service";
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.scss']
})
export class NftDetailComponent implements OnInit{

  token$!: Observable<string>
  nft$!: Promise<NftExtended>

  constructor(
    private nftService : NftService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.token$ = this.authService.token$
    const id = this.route.snapshot.paramMap.get('id')
    let prevUrl: string = ''
    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        prevUrl = events[0].urlAfterRedirects
      });
    if (!id){
      this.router.events
      this.router.navigateByUrl(prevUrl)
    }else{
      this.nft$ = this.nftService.getById(parseInt(id))
    }

  }

}
