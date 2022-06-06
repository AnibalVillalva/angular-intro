import { Product, calculateFee } from "./06-Desstrucutracion-array";


const shopCart: Product[]= [
    {
        desc: 'Phone',
        amount: 100
    },
    {
        desc: 'Phonem2',
        amount: 120
    }

];

const [total, fee] = calculateFee(shopCart);

console.log('Total: ',total);
console.log('Fee: ',fee);
