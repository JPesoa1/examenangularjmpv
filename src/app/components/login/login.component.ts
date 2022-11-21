import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { TiendaService } from 'src/app/services/tienda/tienda.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ("cajapassword") cajaPassword!:ElementRef;

  @ViewChild ("cajaemail") cajaEmail!:ElementRef;

  constructor(private _service:TiendaService , private _router:Router) { }

  ngOnInit(): void {

    
  }

  login(){
    
   
      var email= this.cajaEmail.nativeElement.value
      var password= this.cajaPassword.nativeElement.value
    

    this._service.postLogin(email,password).subscribe(data=>{
      
      if(data.response){
        console.log(data.response)
        localStorage.setItem("token",data.response);
        console.log(localStorage.getItem("token"))
        this._router.navigate(["/home"])
      }
      
    })
  }
  registro(){
    this._router.navigate(["/registro"])
  }

}
