import {Component, OnInit} from '@angular/core';
import {Acquisition} from "../../model/acquisition.model";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";
import {AcquisitionService} from "../../service/acquisition/acquisition.service";
import jwt_decode from "jwt-decode";

import {CoursEthService} from "../../service/cours-eth/cours-eth.service";
import {ChartConfiguration, ChartOptions} from "chart.js";


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

    this.coursEthService.getEthereumHistory()
        .then(data =>{
          this.coursEth = data

          let myData: number[] = []
          this.coursEth.forEach((day) => {
            console.log(day)
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
          console.log(this.lineChartData)

        })




  }

}
