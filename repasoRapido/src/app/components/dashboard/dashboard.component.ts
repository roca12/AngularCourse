import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre: string;
  urlimagen:string;
  texto:string;
  texto2:string;
  titulo:string;
  listausuarios:any[];
  constructor() {
    this.titulo="ejemplo";
    this.nombre = "";
    this.urlimagen="https://i.pinimg.com/originals/16/74/7d/16747d7c2b3ec3ae2059500e00445f7d.png";
    this.texto="Escribe aqui ...";
    this.texto2="Texto";
    this.listausuarios=[
      {nombre:"Camilo Cepeda",email:"cepedalochupa@gmail.com",genero:"Masculino"},
      {nombre:"Daniel Ojeda",email:"fenacrim@gmail.com",genero:"Masculino"},
      {nombre:"Paula Rosero",email:"wholesomepie38@gmail.com",genero:"Femenino"},
      {nombre:"Diego Rodriguez",email:"roca230313@gmail.com",genero:"Masculino"}
    ]
  }

  ngOnInit(): void {
  }

  getNombre():string{

    return this.nombre="DIEGO";
  }

  cambiarTexto():void{
    this.titulo="Cambio de titulo";
  }

  cambiarTexto2(nuevotexto:string):void{
    this.texto2=nuevotexto;
  }

}
