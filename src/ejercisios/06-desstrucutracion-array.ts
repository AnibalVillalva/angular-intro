export interface Product {
    desc: string,
    amount: number
}

const tablet: Product = {
    desc: 'ipad',
    amount: 350
}

const iphone: Product = {
    desc: 'iphone',
    amount: 850
}


export function calculateFee( prodcuts: Product[]): [number, number] {
    let total: number = 0;

    prodcuts.forEach( ({amount})=> {
        total += amount;
    });

    return [total, total*0.15];
}


const art = [iphone, tablet];
const [total, fee] = calculateFee(art);

console.log("Total", total);
console.log("Fee", fee);

