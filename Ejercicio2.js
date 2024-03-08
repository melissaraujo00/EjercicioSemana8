class PersonajesYSBLF{
    constructor(  nombre, personaje,frase ){
        this.nombre = nombre;
        this.personaje = personaje;
        this.frase = frase;
    }

    protagonisar(){
        return console.log(`Hola, soy ${this.nombre} y protagonizo ${this.personaje} en Yo soy Betty la fea y mi frase es ${this.frase}`);
    }

}

class Protagonista extends PersonajesYSBLF{
    protagonisar(){
        return console.log(`Hola, soy ${this.nombre} y protagonizo ${this.personaje} en Yo soy Betty la fea y mi frase es "${this.frase}"`);
    }
    
}
class Antagonista extends PersonajesYSBLF{
    protagonisar(){
        return console.log(`Hola, soy ${this.nombre} y protagonizo ${this.personaje} en Yo soy Betty la fea y mi frase es "${this.frase}"`);
    }

}

class Tritagonistas extends PersonajesYSBLF{
    protagonisar(){
        return console.log(`Hola, soy ${this.nombre} y protagonizo ${this.personaje} en Yo soy Betty la fea y mi frase es "${this.frase}"`);
    }
}

let betty = new Protagonista( 'Ana María Orozco', 'Betty la fea', 'La cabeza de la mesa esta donde yo este sentada');
let patricia = new Antagonista( 'Lorna Paz', 'Patricia Fernandez','Y llegaron los meseros');

betty.protagonisar();
patricia.protagonisar();