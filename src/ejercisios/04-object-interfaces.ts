interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddr: () => void;
}
interface Address { 
    city: string;
    country: string;
    street: string;
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30, 
    address: {
        street: 'main st',
        country: 'USA',
        city: 'NY'
    },
    showAddr(){
        return this.name + ', ' + this.address.city + ', ' + this.address.country; 
    }
}

const address = superHero.showAddr()
console.log(address);
