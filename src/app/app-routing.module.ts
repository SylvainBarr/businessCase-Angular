import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./view/index/index.component";
import {NftListComponent} from "./view/nft-list/nft-list.component";
import {ContactComponent} from "./view/contact/contact.component";
import {AboutComponent} from "./view/about/about.component";
import {NewNftComponent} from "./view/new-nft/new-nft.component";
import {NftDetailComponent} from "./view/nft-detail/nft-detail.component";
import {UserNftListComponent} from "./view/user-nft-list/user-nft-list.component";
import {ProfileComponent} from "./view/profile/profile.component";
import {SignUpComponent} from "./view/sign-up/sign-up.component";
import {authGuard} from "./guard/auth/auth.guard";
import {NotFoundComponent} from "./view/not-found/not-found.component";
import {NotLoggedComponent} from "./view/not-logged/not-logged.component";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'home'},
  {path: 'home', component: IndexComponent},
  {path: 'nfts', children: [
          {path: '', component: NftListComponent},
          {path: 'my-gallery', canActivate: [authGuard], component: UserNftListComponent},
          {path: ':userId', canActivate: [authGuard], component: UserNftListComponent},

      ]},
  {path: 'contact', canActivate: [authGuard], component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'nft', canActivate: [authGuard], children: [
          {path: ':id', component: NftDetailComponent },
          {path: 'new', component: NewNftComponent }
      ]
  },
  {path: 'profile', canActivate: [authGuard], component: ProfileComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'not-logged', component: NotLoggedComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
