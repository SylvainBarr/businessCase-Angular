import { Component } from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmitAuthForm(loginForm: NgForm) {
    if(loginForm.valid){
      this.authService
        .login(loginForm.value)
        .then(()=>this.router.navigateByUrl('/home'))
      const myModalClose: HTMLElement|null = document.querySelector('#Connexion-backdrop .btn-close')
      myModalClose!.click()
    }
  }
}
