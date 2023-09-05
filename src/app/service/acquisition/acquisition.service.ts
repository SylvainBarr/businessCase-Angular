import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "../../environment/environment";
import {Acquisition} from "../../model/acquisition.model";
import {firstValueFrom, map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AcquisitionService {

  private baseApiUrl: string

  constructor(private http: HttpClient) {
    this.baseApiUrl = Environment.API_URL
  }

  getAllAcquisitionsByUser(userId: number): Promise<Acquisition[]>{
    return firstValueFrom(
      this.http
        .get<{'hydra:member' : Acquisition[]}>(this.baseApiUrl + 'acquisitions?page=1&pagination=false&user.id='+ userId +'&isSold%5B%5D=false')
        .pipe(
          map(response => response['hydra:member'].map(aH => Acquisition.fromAcquisitionHttpToAcquisition(aH)))
        )
    )
  }





}
