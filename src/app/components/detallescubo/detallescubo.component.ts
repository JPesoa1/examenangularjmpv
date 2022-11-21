import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css']
})
export class DetallescuboComponent implements OnInit {
  public detalleCubo : any;
  constructor(private _service:TiendaService,private _activated:ActivatedRoute) { }

  ngOnInit(): void {
    this._activated.params.subscribe((parametros:Params)=>{
      var parametro=parametros["id"];
      if(parametro){
        this._service.getDetallesCubo(parametro).subscribe(res=>{
          this.detalleCubo=res;
        })
      }
    })
  }

}
