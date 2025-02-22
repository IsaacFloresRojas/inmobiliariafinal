import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { WebModule } from 'src/app/web/web.module';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  
})
export class DetallesComponent implements OnInit {
  imagenesCarrusel: string[] = [
    'assets/img/alquilar.jpg',
    'assets/img/contratos.jpeg',
    'assets/img/departamento-pequeno.jpg',
    'assets/img/deposito.jpg',
    'assets/img/Slide-1.jpg',
    'assets/img/Slide-3.jpg',
  ];

  imagenPrincipalUrl: string = 'assets/img/Houses-bro.png';

  cambiarImagen(imagenUrl: string) {
    this.imagenPrincipalUrl = imagenUrl;
  }


  nombre: string = '';
  telefono: string = '';
  email: string = '';
  comentarios: string = 'Hola, buenas tardes me interesa esta propiedad y quisiera ponerme en contacto con usted para poder agendar una fecha y hora para visitar dicha propiedad.';

  enviarFormulario() {
    // Aquí puedes enviar los datos del formulario a través de un servicio HTTP o realizar otras acciones que desees.
  }

  enviarWhatsApp() {
    const numeroTelefono = '2227515083'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    const mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. URL: ${window.location.href} `;

    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

     // Abre la URL de WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }





  

  constructor( private router:Router) { }
  
  back(){
    this.router.navigate(["/inmueble/vista"]);
  }

  ngOnInit(): void {
    const shareButton = document.querySelectorAll<HTMLButtonElement>("button.shareButton");

    shareButton[0].addEventListener("click", (e) => {
      for (let i = 0; i < shareButton.length; i++) {
        shareButton[i].classList.toggle("open");
        shareButton[0].classList.remove("sent");
      }
    });

    for (let i = 1; i < shareButton.length; i++) {
      shareButton[i].addEventListener("click", (e) => {
        for (let i = 0; i < shareButton.length; i++) {
          shareButton[i].classList.toggle("open");
        }
        shareButton[0].classList.toggle("sent");
      });
    }


    

  }

  

}




