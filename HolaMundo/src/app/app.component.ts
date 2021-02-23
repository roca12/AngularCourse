import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // //property binding 
  // equivalencia a bundle de java
  // se puede bindear propiedades para pasarlos al html
  // title = 'HolaMundo';
  // nombre = 'Diego';
  // textoplaceholder = 'Escriba algo aqui';
  // deshabilitado = true;
  // imgsrc = "https://pbs.twimg.com/profile_images/378800000776913523/939b48ae3f9f637bb623322d53e8ad93_400x400.png";

  // //event binding 
  // texto="Este es el texto del event binding";
  // cambiarTexto():void {
  //   this.texto="He cambiado el texto con los event binding";

  // two way binding
  // texto ='';

  listEstudiantes: any[] = [
    { nombre: "Diego Rodriguez", estado: "Mal" },
    { nombre: "Paula Rosero", estado: "Pasa" },
    { nombre: "Camilo Sepedah", estado: "Libre" },
  ]
  mostrar=true;
  toogle():void{
    this.mostrar=!this.mostrar;
  }


  constructor() {
    // setInterval(() => this.deshabilitado = false, 3000);
  }
}
