import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ComunicarService } from 'src/app/servicios/comunicar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  public loginForm !: FormGroup;
  public showPencil!: boolean;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router, public comunicarComponentes:ComunicarService) {}

  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    });
    
  }

  login(){
    this.http.get<any>("http://localhost:3000/loggin")
      .subscribe(res => {
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        });
        if(user){
          alert("Funca el login");
          this.loginForm.reset();
          this.comunicarComponentes.mostrarLapiz=true; //Lo seteo true;
          console.log('Estamos parados en el login',this.comunicarComponentes.mostrarLapiz);
          this.router.navigate(['visitante']);
          
        }else{
          alert("No se encontro el usuario");
        }
      },err=>{
        alert("Algo salio mal")
      })
  }
  


}
