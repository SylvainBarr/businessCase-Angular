import {Component, OnInit} from '@angular/core';
import {Acquisition} from "../../model/acquisition.model";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";
import {AcquisitionService} from "../../service/acquisition/acquisition.service";
import jwt_decode from "jwt-decode";

import {CoursEthService} from "../../service/cours-eth/cours-eth.service";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {User} from "../../model/user.model";
import {UserService} from "../../service/user/user.service";


@Component({
  selector: 'app-user-nft-list',
  templateUrl: './user-nft-list.component.html',
  styleUrls: ['./user-nft-list.component.scss']
})
export class UserNftListComponent implements OnInit{

  acquisitions$!: Promise<Acquisition[]>
  token$!: Observable<string>
  token!: string
  coursEth!: [number, number][]
  totalValue: number = 0
  decodedToken!: {iat: number, exp: number, username: string, nickname: string, id: number}
  user$?: Promise<User>

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  }
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0)'
        },
        border: {
          color: '#000',
          width: 1
        },
        ticks: {
          display: true,
          color: '#FFF',
          font: {
            family: 'Poppins',
            weight: 'bold'
          }
        }
      },
      y0: {
        min: 0,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0)'
        },
        border: {
          color: '#000',
          width: 1
        },
        position: 'left',
        ticks: {
          color: '#E0CB0B',
          font: {
            family: 'Poppins',
            weight: 'bold'
          }
        }
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }


  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private acquisitionService: AcquisitionService,
              private coursEthService: CoursEthService,
              private userService: UserService
  ) {
  }


  ngOnInit() {
    this.token$ = this.authService.token$

    const userId = this.route.snapshot.paramMap.get('userId')

    if(userId){
      this.acquisitions$ = this.acquisitionService.getAllAcquisitionsByUser(parseInt(userId))
      this.user$ = this.userService.getUserById(parseInt(userId))
    }else{
      this.token$.subscribe((token: string) => this.token = token)
      this.decodedToken = jwt_decode(this.token)
      this.acquisitions$ = this.acquisitionService.getAllAcquisitionsByUser(this.decodedToken.id)
    }

    this.acquisitions$.then(acquisitions => acquisitions.map(a => this.totalValue += a.value))

    this.coursEthService.getEthereumHistory()
        .then(data =>{
          this.coursEth = data

          let myData: number[] = []
          this.coursEth.forEach((day) => {

            this.lineChartData.labels!.push(new Date(day[0]).toLocaleDateString())
            myData.push(day[1])
          })
          this.lineChartData.datasets = [
            {
              data: myData,
              label: 'Ethereum',
              yAxisID: 'y0',
              pointBackgroundColor: '#000',
              pointBorderColor: '#FFF',
              fill: true,
              borderColor: 'black',
              backgroundColor: 'rgba(0,0,0,0.3)'
            }
          ]


        })




  }

}
