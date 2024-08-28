import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { Ipr, Category } from './interfaces/IPR';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public save: Ipr []=[];
  public items!: Category;
  url =environment.URL_BASE + "products";

  
  constructor(private readonly httpSrv: HttpService, private readonly navCtr: NavController) {}

  async ngOnInit(){
    this.save = await this.httpSrv.get<Ipr[]>(this.url)
   
      
  }

  async onOptionSelected(event: any) {
    if (event.detail.value != 'all') {
      this.save = await this.httpSrv.get<Ipr[]>(
        this.url + '/category/' + event.detail.value
      );
    } else {
      this.ngOnInit();
    }
  }
  public doNavigate(event: number){
    console.log (event);
    
    this.navCtr.navigateForward('details/'+event);
  }

}

