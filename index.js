
function receivesAFunction(cbF){
    return cbF()
}

function returnsANamedFunction(){
    const hiThere = () => console.log(`Hi there`)
    return hiThere
}

function returnsAnAnonymousFunction(){
    return function(){console.log('Óla')}
}
