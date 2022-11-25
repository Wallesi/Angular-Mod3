import { Component, OnInit } from '@angular/core';
import { ComunicarService } from 'src/app/servicios/comunicar.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showLogout!: boolean;

  constructor(public comunicarComponente:ComunicarService) {}

  

  ngOnInit(): void {

    if(this.comunicarComponente.mostrarLapiz===true){
      this.showLogout=true;
    }
  }

  
  

}
