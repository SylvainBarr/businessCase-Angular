import { Injectable } from '@angular/core';
import {CoursEth} from "../../model/cours-eth.model";
import {firstValueFrom, map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursEthService {

  constructor(private http: HttpClient) { }


  getEthereumHistory(): Promise<number[][]>{
    return firstValueFrom(
        this.http
            .get<{prices: [][] }>('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=eur&days=7&interval=daily')
            .pipe(
                map(response => response.prices)
            )
    )
  }
}
