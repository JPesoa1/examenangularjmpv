import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-marcacubo',
  templateUrl: './marcacubo.component.html',
  styleUrls: ['./marcacubo.component.css']
})
export class MarcacuboComponent implements OnInit {
  public cubos !: Array<Cubo>
  constructor(private _service:TiendaService, private _activated:ActivatedRoute) { }

  ngOnInit(): void {

    this._activated.params.subscribe((parametros:Params)=>{
      var parametro=parametros["marca"];
      console.log(parametro)
      if(parametro){
        this._service.getCuboMarca(parametro).subscribe(res=>{
          this.cubos=res;
        })
      }
    })
  }

}
