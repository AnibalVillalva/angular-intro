
class Person {
    constructor (
        public name: string,
        public address: string,

    ){}
}

class Heroe2 extends Person {
/*     private alterEgo: string;
    public age: number;
    static realName: number;
 */
/*     constructor(alterEgo: string) {
        this.alterEgo = alterEgo;
    } */
    constructor(
        private alterEgo: string,
        public age: number,
        public namePerson: string,
        public adressPerson: string
    ){
        super(namePerson, adressPerson)
    }
}


const ironman2 = new Heroe2( 'Ironman', 42, 'Tony', "address ej" );

console.log(ironman2);
