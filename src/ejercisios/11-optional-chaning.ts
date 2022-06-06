
interface passanger { 
    name: string;
    child?: string[];
}

const pass1: passanger = {
    name: 'Jhon',
}


const pass2: passanger = {
    name: '',
    child: ['a','b']
}

function printChilds(pass: passanger): void {
    const n = pass.child?.length||0;
    console.log(n);
}

printChilds(pass1);
printChilds(pass2);