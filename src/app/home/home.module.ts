import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardComponent } from '../components/card/card.component';
import { HttpService } from '../services/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage, CardComponent],
  providers: [ HttpService]
})
export class HomePageModule {}
