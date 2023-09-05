import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NftCardComponent } from './component/nft-card/nft-card.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { IndexComponent } from './view/index/index.component';
import { NftListComponent } from './view/nft-list/nft-list.component';
import { UserNftListComponent } from './view/user-nft-list/user-nft-list.component';
import { NftDetailComponent } from './view/nft-detail/nft-detail.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { NewNftComponent } from './view/new-nft/new-nft.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { ProfileComponent } from './view/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './view/not-found/not-found.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { NotLoggedComponent } from './view/not-logged/not-logged.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NftCardComponent,
    UserFormComponent,
    IndexComponent,
    NftListComponent,
    UserNftListComponent,
    NftDetailComponent,
    AboutComponent,
    ContactComponent,
    NewNftComponent,
    SignUpComponent,
    ProfileComponent,
    NotFoundComponent,
    NotLoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
