import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private httpclient : HttpClient) { }

  getCubos(): Observable<any>{
    var request="api/Cubos"
    var url=environment.urlTienda+request;
    return this.httpclient.get(url);
  }

  getMarcas(): Observable <any>{
    var request="api/Cubos/Marcas";
    var url=environment.urlTienda+request;

    return this.httpclient.get(url);
  }

  getCuboMarca(marca:string):Observable<any>{
    var request="api/Cubos/CubosMarca/"+marca;
    var url=environment.urlTienda+request;

    return this.httpclient.get(url);
  }

  getDetallesCubo(id:number):Observable <any>{
    var request="/api/ComentariosCubo/GetComentariosCubo/"+id;
    var url=environment.urlTienda+request;
    return this.httpclient.get(url);

  }
  
  postLogin(email:string,password:string):Observable<any>{
    
    var request="api/Manage/Login";
    var user={
      email:email,
      password:password
    }
    var json = JSON.stringify(user);
    console.log(json)
    var url=environment.urlTienda+request;
    var header = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.httpclient.post(url,json,{headers:header});
  }

  postRegistro(usuario:Usuario){
    var request="/api/Manage/RegistroUsuario";
    var json = JSON.stringify(usuario);
    var url=environment.urlTienda+request;
    var header = new HttpHeaders({
      'Content-Type': 'application/json',

    })

    return this.httpclient.post(url,json,{headers:header})
  }

  getPerfil(){
    var request="/api/Manage/PerfilUsuario";
    var token = localStorage.getItem("token");
    console.log(localStorage.getItem("token")+"Aqui")
    var header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    })
    var url = environment.urlTienda + request;

    return this.httpclient.get(url, {headers: header});

  }

  getCompra(){
    var request="/api/Compra/ComprasUsuario";
    var token = localStorage.getItem("token");
    var header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    })
    var url = environment.urlTienda + request;

    return this.httpclient.get(url, {headers: header});

  }

  postCompra(id:number){
    var request="/api/Compra/InsertarPedido/"+id;
    var token = localStorage.getItem("token");
    var header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    })
    var url = environment.urlTienda + request;

    return this.httpclient.post(url,id,{headers: header});

  }

}
