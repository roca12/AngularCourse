import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados:Empleado[]=[
    { ID:1,nombre:'juan',apellido:'rodriguez',sexo:'Masculino',salario:25000},
    { ID:2, nombre:'diego', apellido:'rodriguez', sexo:'Masculino', salario:25000 },
    { ID: 3, nombre: 'paula', apellido: 'rosero', sexo:'Femenino', salario:25000 },
    { ID:4, nombre:'camilo', apellido:'cepeda', sexo:'Masculino', salario:25000 },
    { ID: 5, nombre: 'daniel', apellido: 'ojeda', sexo:'Femenino', salario:25000 },
    { ID:6, nombre:'juan', apellido:'rodriguez', sexo:'Masculino', salario:25000 },
  ]

 radioButtonSeleccionado='Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados():number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos():number{
    return this.listEmpleados.filter(list => list.sexo ==='Femenino').length
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length
  }
  empleadoCountRadioButtonChange(radioButtonSelec:string):void{
    this.radioButtonSeleccionado=radioButtonSelec;

  }
}
