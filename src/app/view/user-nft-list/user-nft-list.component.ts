import {Component, OnInit} from '@angular/core';
import {Acquisition} from "../../model/acquisition.model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";
import {AcquisitionService} from "../../service/acquisition/acquisition.service";
import jwt_decode from "jwt-decode";
import {CoursEth} from "../../model/cours-eth.model";
import {CoursEthService} from "../../service/cours-eth/cours-eth.service";

@Component({
  selector: 'app-user-nft-list',
  templateUrl: './user-nft-list.component.html',
  styleUrls: ['./user-nft-list.component.scss']
})
export class UserNftListComponent implements OnInit{

  acquisitions$!: Promise<Acquisition[]>
  token$!: Observable<string>
  token!: string
  coursEth$!: Promise<number[][]>

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private acquisitionService: AcquisitionService,
              private coursEthService: CoursEthService
  ) {
  }


  ngOnInit() {
    this.token$ = this.authService.token$
    console.log(this.token$)
    const userId = this.route.snapshot.paramMap.get('id')

    if(userId){
        this.acquisitions$ = this.acquisitionService.getAllAcquisitionsByUser(parseInt(userId))
    }else{
      this.token$.subscribe((token: string) => this.token = token)
      let decodedToken: {iat: number, exp: number, username: string, nickname: string, id: number} = jwt_decode(this.token)
      this.acquisitions$ = this.acquisitionService.getAllAcquisitionsByUser(decodedToken.id)
    }

    this.coursEth$ = this.coursEthService.getEthereumHistory()
      console.log(this.coursEth$)


  }

}
