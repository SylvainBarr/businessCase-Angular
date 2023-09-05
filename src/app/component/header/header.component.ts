import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faBars, faRightFromBracket, faRightToBracket, faUserPlus} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  faBars = faBars
  faSignIn = faRightToBracket
  faSignOut = faRightFromBracket
  faSignUp = faUserPlus







  onClickClose() {
    const modalClose: HTMLElement|null = document.querySelector('.offcanvas .btn-close')
    modalClose!.click()
  }
}
