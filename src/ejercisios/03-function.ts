import { createUnparsedSourceFile } from "typescript";

function add(a: number, b: number): number {
    return a + b;
}

const add2 = (a: number, b?: number, c: number=2 )=>{

    return a*c;
}

interface CharacterLOR {
    name: string;
    hp: number;
    showHP: () => void;
}
function health( character: CharacterLOR, x: number): void{
    character.hp += x;
    console.log(character);
}

const res = add(10,7);

const newCharacter: CharacterLOR = {
    name: 'Strider',
    hp: 50,
    showHP() {
        console.log('HP: ', this.hp) ;
    }
}
health(newCharacter, 20)
newCharacter.showHP();

console.log(res);