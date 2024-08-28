import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarShoppingServiceService } from 'src/app/car-shopping-service.service';
import { Ipr } from 'src/app/home/interfaces/IPR';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public part!: Ipr;

  constructor(private readonly HttpSrv: HttpService, private readonly params:ActivatedRoute, private readonly HttpCart: CarShoppingServiceService ) { }

  async ngOnInit() {
    this.params.params.subscribe(async (params) => {
      const link = environment.URL_BASE + 'products/' + params['id'];
      console.log(params);
      this.part = await this.HttpSrv.get<Ipr>(link);
      console.log(this.part);
    });
  }

}                                       
