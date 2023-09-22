import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  userForm!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm()
  }

  private initForm(){
    this.userForm = this.fb.group(
      {
        email:[
          'Votre E-mail',
          [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(320)]
        ],
        password:[
          'Votre mot de passe',
          [Validators.required, Validators.minLength(8)]
        ],
        profilePicture:[
          'Votre image de profil',
          []
        ],
        nickname:[
          'Votre Pseudonyme',
          [Validators.required, Validators.minLength(5), Validators.maxLength(18)]
        ],
        firstLine:[
          'Votre adresse: Numéro, Rue',
          [Validators.required, Validators.minLength(5)]
        ],
        secondLine:[
          "Compléments d'adresse si nécessaire",
          []
        ],
        city:[],
      }
    )
  }



}
