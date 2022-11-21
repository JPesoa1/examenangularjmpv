import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public marcas:any;
  public modelos:any;
  constructor(private _services:TiendaService) { }

  ngOnInit(): void {
    this._services.getMarcas().subscribe(res=>{
      this.marcas=res;
    })
  }

}
