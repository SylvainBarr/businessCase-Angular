import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "../../environment/environment";
import {User} from "../../model/user.model";
import {firstValueFrom, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl: string
  constructor(private http: HttpClient) {
    this.baseApiUrl = Environment.API_URL
  }


  getUserById(userId: number): Promise<User>{
    return firstValueFrom(
        this.http
            .get<User>(this.baseApiUrl + 'users/' + userId)
            .pipe(
                map(response => User.fromUserHttpToUser(response))
            )
    )
  }
}
