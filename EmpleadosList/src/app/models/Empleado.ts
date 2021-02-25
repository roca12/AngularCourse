export class Empleado{
    ID:number;
    nombre:string;
    apellido:string;
    sexo:string;
    salario:number;
    constructor(ID:number,nombre:string,apellido:string,sexo:string,salario:number){
        this.ID=ID;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.salario=salario;
    }
}