import { Injectable } from '@angular/core';
import {Nft, NftExtended, NftHttp, NftHttpExtended} from "../../model/nft.model";
import {firstValueFrom, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Environment} from "../../environment/environment";

export type GetNftResponse = {'hydra:member' : NftHttp[], 'hydra:view': {'hydra:first': string, 'hydra:last': string, 'hydra:next': string, 'hydra:previous': string}}
export type NftResponsePromise = {nfts: Nft[], first: string, last: string, next: string, prev: string}


@Injectable({
  providedIn: 'root'
})
export class NftService {

  private baseApiUrl: string
  constructor(private http: HttpClient) {
    this.baseApiUrl = Environment.API_URL
  }

  getLastsNfts(): Promise<NftResponsePromise> {
    return firstValueFrom(
      this.http
        .get<GetNftResponse>(this.baseApiUrl+'nfts?page=1&order%5BdateDrop%5D=desc')
        .pipe(
          map(response =>({
            nfts: response['hydra:member'].map(nH => Nft.fromNftHttpToNft(nH)),
            first: response['hydra:view']['hydra:first'],
            last: response['hydra:view']['hydra:last'],
            next: response['hydra:view']['hydra:next'],
            prev: response['hydra:view']['hydra:previous']
          }))
        )
    )
  }

    getAllNfts(page: string = '1'): Promise<NftResponsePromise> {
        return firstValueFrom(
            this.http
                .get<GetNftResponse>(this.baseApiUrl+'nfts?page='+ page)
                .pipe(
                    map(response =>({
                        nfts: response['hydra:member'].map(nH => Nft.fromNftHttpToNft(nH)),
                        first: response['hydra:view']['hydra:first'],
                        last: response['hydra:view']['hydra:last'],
                        next: response['hydra:view']['hydra:next'],
                        prev: response['hydra:view']['hydra:previous']
                    }))
                )
        )
    }

    getNftByPartial(searchFilter: string) {
        return firstValueFrom(
            this.http
                .get<GetNftResponse>(this.baseApiUrl + searchFilter)
                .pipe(
                    map(response =>({
                        nfts: response['hydra:member'].map(nH => Nft.fromNftHttpToNft(nH)),
                        first: response['hydra:view']['hydra:first'],
                        last: response['hydra:view']['hydra:last'],
                        next: response['hydra:view']['hydra:next'],
                        prev: response['hydra:view']['hydra:previous']
                    }))
                )
        )
    }

  getById(id: number):Promise<NftExtended> {
    return firstValueFrom(
      this.http
        .get<NftHttpExtended>(this.baseApiUrl+'nfts/'+id)
        .pipe(
          map(nftExtendedHttp => Nft.fromNftExtendedHttpToNftExtended(nftExtendedHttp)))
    )
  }
}
