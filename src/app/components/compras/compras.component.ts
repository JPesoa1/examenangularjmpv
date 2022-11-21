import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  public compras:any;
  constructor(private _services :TiendaService) { }

  ngOnInit(): void {
    this._services.getCompra().subscribe(res=>{
      console.log(res)
      this.compras=res;
    })
  }

}
