import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faBars, faRightFromBracket, faRightToBracket, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Observable} from "rxjs";
import {AuthService} from "../../service/auth/auth.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  faBars = faBars
  faSignIn = faRightToBracket
  faSignOut = faRightFromBracket
  faSignUp = faUserPlus
  token$!: Observable<string>


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.token$ = this.authService.token$
  }


  onClickClose() {
    const modalClose: HTMLElement|null = document.querySelector('.offcanvas .btn-close')
    modalClose!.click()
  }

  onClickCloseAndDisconnect() {
    this.authService.logout()
    const modalClose: HTMLElement|null = document.querySelector('.offcanvas .btn-close')
    modalClose!.click()
  }
}
