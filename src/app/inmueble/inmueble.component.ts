import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatStepperModule} from '@angular/material/stepper';
  import {MatButtonModule} from '@angular/material/button';
  import { FormGroup } from '@angular/forms';
  import {MatSelectModule} from '@angular/material/select';
  import {MatRadioModule} from '@angular/material/radio';
  import { Inmuebles,Estados, Municipios, Asentamiento } from '../services/Interface/Interfaces';
  import { HttpService} from '../services/http/http.service';
  import { NgFor } from '@angular/common';
  import { MatDividerModule } from '@angular/material/divider';
  import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WebModule } from '../web/web.module';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule,MatRadioModule,NgFor,
    MatDividerModule,
    WebModule
    
    
  ],
  
  
})
export class InmuebleComponent implements OnInit {
// Define un FormControl con validadores para números

foods: Food[] = [
  {value: '0', viewValue: '0'},
  {value: '1', viewValue: '1'},
  {value: '2', viewValue: '2'},
  {value: '3', viewValue: '3'},
  {value: '4', viewValue: '4'},
  {value: '5', viewValue: '5'},
];



constructor(private formBuilder: FormBuilder
  , private httpService: HttpService,
  private httpClient: HttpClient,
  private router: Router) {}


numberFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(/^-?\d*(\.\d+)?$/) // Acepta números enteros y decimales
]);

  imageForm!: FormGroup;
  selectedImages!: FileList;


  fileName: string ="";
  isLinear = false;

  cheks: any[] = [];

  inmuebles: Inmuebles[] =[];
  inmueble!: Inmuebles;
  estados: Estados[] =[];
  estado!: Estados;
  municipios: Municipios[] =[];
  municipio!: Municipios;

  asentamientos: Asentamiento[] =[];
  asentamiento!: Asentamiento;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  tercerFormGroup!: FormGroup;

  ngOnInit(){
    this.obtenerDatosInmuebles();
    
    //Imagenes
    this.imageForm = this.formBuilder.group({
      images: [''],
    });
  
    this.firstFormGroup = this.formBuilder.group({
     pId_Tipo_Inmueble: ['',[Validators.required]]
    })
    this.secondFormGroup = this.formBuilder.group({
      pId_estado: ['',[Validators.required]],
      pId_municipio: ['',[Validators.required]],
      pId_asentamiento: ['',[Validators.required]],
      p_calle: ['',[Validators.required]],
      p_prec_min: ['',[Validators.required]] ,
      p_prec_max: ['',[Validators.required]] ,
      p_prec_final: ['',[Validators.required]]
     })
    this.tercerFormGroup = this.formBuilder.group({
      p_nom_inmu:  ['',[Validators.required]],
      p_desc:  ['',[Validators.required]],
      p_num_int:  ['',[Validators.required]],
      p_num_ext:  ['',[Validators.required]],
      p_terreno:  ['',[Validators.required]],
      p_constru: ['',[Validators.required]],
      p_num_recamaras:['',[Validators.required]],
      p_banos:['',[Validators.required]],
      p_pisos:['',[Validators.required]], 
      p_gym: ['',[Validators.required]],
      p_esta: ['',[Validators.required]],
      p_jardin: ['',[Validators.required]],
      p_cocina:['',[Validators.required]],
      p_alberca: ['',[Validators.required]],
      p_roof: ['',[Validators.required]],
      p_anti: ['',[Validators.required]],
      p_acabados: ['',[Validators.required]]
    })

  }

  obtenerDatosInmuebles(){
    this.httpService.tipoInmueble().subscribe((resp:any)=>{
     if(resp !== 201){
      
       this.inmueble = resp[0].id_Tipo_Inmueble;
       this.inmuebles = resp;
     }
    },(err)=>{
     console.log(err);
    })
   }

   guardar(){
    console.log(this.firstFormGroup.value.pId_Tipo_Inmueble);
    this.httpService.obtenerEstado().subscribe((resp:any)=> {
      if(resp !== 201){
        this.estado = resp[0].id_Estado;
        this.estados = resp;
      }
     },(err)=>{
      console.log(err);
     })

     
    
   }

updateM(){
  this.httpService.obtenerMunicipio(this.secondFormGroup.value.pId_estado).subscribe((resp:any)=> {
    if(resp !== 201){
      this.municipio = resp[0].id_Municipio;
      this.municipios = resp;
    }
   },(err)=>{
    console.log(err);
   })
}

updateA(){
  this.httpService.obtenerAsentamiento(this.secondFormGroup.value.pId_estado,
    this.secondFormGroup.value.pId_municipio).subscribe((resp:any)=> {
    if(resp !== 201){
      this.asentamiento = resp[0].id_Asentamiento;
      this.asentamientos = resp;
    }
   },(err)=>{
    console.log(err);
   })
  
 
}


xd(){
  console.log(this.tercerFormGroup.value.p_gym);
}


  

  subirInmueble(){
    this.subir_imagenes();
    let p_nom_inmueble = this.tercerFormGroup.value.p_nom_inmu;
    let p_desc_inmueble = this.tercerFormGroup.value.p_desc;
    let p_calle1 = this.secondFormGroup.value.p_calle;
    let p_num_ext1 = this.tercerFormGroup.value.p_num_ext;
    let p_num_int1 = this.tercerFormGroup.value.p_num_int;
    let p_terreno1 = this.tercerFormGroup.value.p_terreno;
    let p_construccion = this.tercerFormGroup.value.p_constru;
    let p_recamara = this.tercerFormGroup.value.p_num_recamaras;
    let p_bano = this.tercerFormGroup.value.p_banos;
    let p_cocina1 = this.tercerFormGroup.value.p_cocina;
    let p_num_pisos = this.tercerFormGroup.value.p_pisos;
    let p_antiguedad = this.tercerFormGroup.value.p_anti;
    let p_acabados1 = this.tercerFormGroup.value.p_acabados;
    let p_alberca1 = this.tercerFormGroup.value.p_alberca;
    let p_jardin1 = this.tercerFormGroup.value.p_jardin;
    let p_gym1 = this.tercerFormGroup.value.p_gym; 
    let p_roof = this.tercerFormGroup.value.p_roof;
    let p_estacionamiento = this.tercerFormGroup.value.p_esta;
    let p_ubi_maps = "Hola ";
    let p_pic_1 = "https://inmobiliaria.arvispace.com/imagenes/" + this.selectedImages[0].name;
    let p_pic_2 = "https://inmobiliaria.arvispace.com/imagenes/" + this.selectedImages[1].name;
    let p_pic_3 = "https://inmobiliaria.arvispace.com/imagenes/" + this.selectedImages[2].name;
    let p_pic_4 = "https://inmobiliaria.arvispace.com/imagenes/" + this.selectedImages[3].name;
    let p_pic_5 = "https://inmobiliaria.arvispace.com/imagenes/" + this.selectedImages[4].name;
    let p_360 = "imagen 360";
    let p_video = "video 1";
    let p_id_asentamiento = this.secondFormGroup.value.pId_asentamiento;
    let p_id_tipo_inmueble = this.firstFormGroup.value.pId_Tipo_Inmueble;
    let p_update = localStorage.getItem("Id_Usuario");
    let p_prec_min1 = this.secondFormGroup.value.p_prec_min;
    let p_prec_max1 = this.secondFormGroup.value.p_prec_max;
    let p_prec_final1 = this.secondFormGroup.value.p_prec_final;
 
    


    this.httpService.registrarInmuebles(p_nom_inmueble,p_desc_inmueble,p_calle1,p_num_ext1,p_num_int1,p_terreno1,
      p_construccion,p_recamara,p_bano,p_cocina1,p_num_pisos, p_antiguedad, p_acabados1,p_alberca1, p_jardin1,p_gym1,
      p_roof,p_estacionamiento, p_ubi_maps,p_pic_1, p_pic_2, p_pic_3, p_pic_4, p_pic_5, p_360, p_video, p_id_asentamiento,p_id_tipo_inmueble,p_update, p_prec_min1,p_prec_max1,
      p_prec_final1).subscribe((data: any) =>{
      if(data == 1){
        alert("Se subio el inmueble");
        this.router.navigate(["/web"]);
        
      } else{

        alert("Error al subir inmueble");
      }
       })
  }

       

  onFileChange(event: any): void {
    this.selectedImages = event.target.files;
  }

  subir_imagenes(): void {
    const formData = new FormData();
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images[]', this.selectedImages[i]);
    }

    this.httpClient.post('https://inmobiliaria.arvispace.com/servicios/subirArchivo.php', formData)
      .subscribe((response) => {
       console.log(response);
      });
  }





 

}
