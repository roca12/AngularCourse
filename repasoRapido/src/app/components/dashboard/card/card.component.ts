import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() textcard: string;
  @Output() nuevoEvent = new EventEmitter<string>();



  @Input() user :any;
  nombre:string;
  email:string;
  genero:string;

  constructor() {
    this.textcard = "";
    this.email="";
    this.nombre="";
    this.genero="";
  }

  ngOnInit(): void {
    this.nombre=this.user.nombre;
    this.email=this.user.email;
    this.genero=this.user.genero;

  }
  cambiarTextoPadre():void{
    this.nuevoEvent.emit("Cambiando el texto por hijo-padre");
  }

}
