import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFirendComponent } from './view-firend/view-firend.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchFriendComponent } from './search-friend/search-friend.component';

const myRoute : Routes = [
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"/view",
    component:ViewFirendComponent
  },
  {
    
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFirendComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
