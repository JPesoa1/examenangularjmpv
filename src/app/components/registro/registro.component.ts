import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @ViewChild ("cajanombre") cajaNombre!:ElementRef;
  @ViewChild ("cajaemail") cajaEmail!:ElementRef;
  @ViewChild ("cajapassword") cajaPassword!:ElementRef;
  @ViewChild ("cajaconfirmarpassword") cajaConfirmarPassword!:ElementRef;

  

  constructor(private _router : Router, private _service:TiendaService) { }

  ngOnInit(): void {

  }

  registro(){
    var nombre=this.cajaNombre.nativeElement.value;
    var email=this.cajaEmail.nativeElement.value;
    var password=this.cajaPassword.nativeElement.value;
    var confirmar=this.cajaConfirmarPassword.nativeElement.value;

    if(password==confirmar){
      var user = new Usuario(0,nombre,email,password);
      this._service.postRegistro(user).subscribe(res=>{
        console.log(res);

        this._router.navigate(["/"])
      })
    }else{
      alert("Las contraseña deben de coincidir")
    }
    
  }

}
