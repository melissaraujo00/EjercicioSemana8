class AmigosCarreras{
    constructor(nombre,edad, mesNacimiento, universidad){
        this.nombre = nombre;
        this.edad = edad;
        this.mesNacimiento = mesNacimiento;
        this.universidad = universidad;
    }

    presentar(){
        return console.log(`Hola soy ${this.nombre} y tengo ${this.edad} naci en ${this.mesNacimiento} y estudio Ing.Desarrollo de Software y estudio en ${this.universidad}`);
    }
}

class Medicina extends AmigosCarreras {
    presentar(){
        return console.log(`Hola soy ${this.nombre} y tengo ${this.edad} naci en ${this.mesNacimiento} y estudio Doctorado en Medicina y estudio en la ${this.universidad}`);
    }   
}

class Sistemas extends AmigosCarreras {
    presentar(){
        return console.log(`Hola soy ${this.nombre} y tengo ${this.edad} naci en ${this.mesNacimiento} y estudio Ing. en Sistemas y redes informaticas y estudio en  la ${this.universidad}`);
    }   
}

class Odontologia extends AmigosCarreras {
    presentar(){
        return console.log(`Hola soy ${this.nombre} y tengo ${this.edad} naci en ${this.mesNacimiento} y estudio Lic. en Odontologia y estudio en ${this.universidad}`);
    }   
}

let xosch = new Medicina('Xoschilt', 20, 'Marzo', 'UES');
let Eduardo = new Sistemas('Eduardo', 19, 'Junio', 'UGB');
xosch.presentar();
Eduardo.presentar();