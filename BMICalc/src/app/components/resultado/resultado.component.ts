import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado:string;
  interpretacion:string;

  constructor(private route: ActivatedRoute) {
    this.resultado="";
    this.interpretacion="";
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if(this.bmi>=25){
      this.resultado="Exceso de peso";
      this.interpretacion="Tienes un IMC superior al normal, podrias hacer un poco mas de ejercicio";

    } else if (this.bmi >= 18.5) {
      this.resultado = "Normal";
      this.interpretacion = "Tienes un IMC normal";

    } else {
      this.resultado = "Bajo de peso";
      this.interpretacion = "Tienes un IMC normal muy bajo, intenta comer un poco mas";

    }
  }

}
