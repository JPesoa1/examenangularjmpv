import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public usuario!:any;
  constructor(private _services:TiendaService) {

  }

  ngOnInit(): void {
    console.log(localStorage.getItem("token"))
    this._services.getPerfil().subscribe(res=>{
      this.usuario=res;
      
    })
  }

}
