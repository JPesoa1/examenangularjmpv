import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent implements OnInit {
  public cubos!: Array<Cubo>
  constructor(private _service :TiendaService) { }

  ngOnInit(): void {
    this._service.getCubos().subscribe(res=>{
      this.cubos=res;
    })
  }

  comprar(id:number){
    this._service.postCompra(id).subscribe(res=>{
      console.log(id);
    })
  }

}
