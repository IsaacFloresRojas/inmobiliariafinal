import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './registro/registro.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { DetallesComponent } from './inmueble/detalles/detalles.component';
import { MatListModule } from '@angular/material/list';
import { MenugloguedoComponent } from './menugloguedo/menugloguedo.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DetallesComponent,
    MenugloguedoComponent,


   
  ],
  imports: [
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     MatIconModule,
     MatDividerModule,
     MatButtonModule,
    // NgbModule,
     FormsModule,
     ReactiveFormsModule,
     MatInputModule,
     MatFormFieldModule,
     MatSelectModule,
     MatRadioModule,
     MatStepperModule,
     AppRoutingModule,
     InmuebleComponent,
     MatStepperModule,
     MatToolbarModule,
     MatListModule,
     


  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
