import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dadoizquierda = "../assets/img/dice1.png";
  dadoderecha = "../assets/img/dice2.png";

  numero1: number=0;
  numero2: number=5;

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5)+1;
    this.numero2 = Math.round(Math.random() * 5)+1;
    this.dadoizquierda = "../assets/img/dice"+this.numero1+".png";
    this.dadoderecha = "../assets/img/dice" + this.numero2 + ".png";
  }
}
