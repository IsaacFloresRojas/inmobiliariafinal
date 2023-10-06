import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  isLoggedIn: boolean = false;
  

  Login(){
    
    this.router.navigate(['/login']);

 }
 contactos(){

  this.router.navigate(['web/contacto']);

 }

 directo(){
  this.router.navigate(['web/particula']);

 }
 corredor(){
  this.router.navigate(['web/Inmobiliariacorredor']);
 }


 desarrolo(){
  this.router.navigate(['web/Constructoradesarrolladora']);


 }

 cerrar(){
  //this.httpService.setGlobalVariable(false);
  this.httpService.cerrarSesion().subscribe((resp: any)=>{},(err)=>{
    console.log(err);
   
  });

 }


 constructor(private router: Router,private httpService: HttpService){
 
  }

  ngOnInit() {
    this.isLoggedIn = this.httpService.getGlobalVariable();
  }
  @ViewChild('ventanaEmergente') ventanaEmergente: any;

  abrirVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'block';
  }

  cerrarVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'none';
  }

 



}
