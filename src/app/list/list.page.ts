import { Component, OnInit } from '@angular/core';
import { GetdatosService } from '../service/getdatos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  datos : any[] = [];

  constructor( public service: GetdatosService) {


    this.service.getDatos<any[]>("").subscribe(data =>  {
      this.datos = data;
      console.log(this.datos);
    })
  }
  ngOnInit(): void {
  }

}
