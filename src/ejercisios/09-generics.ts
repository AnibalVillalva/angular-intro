
function whatType<T>(arg: T){
    return arg;
}

let itsString = whatType("Hello");
let itsNumber= whatType(10);

let itsNumber2= whatType<number>(10);