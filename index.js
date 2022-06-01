function add(a,b){
    return a+b;
}


function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;   
}

function increment(n){
    if(n!==NaN){
        return  n+=1
    }
}

function decrement(n){
    if(n!==NaN){
        return  n-=1
    }
}

function makeInt(n){
const parsed = parseInt(n,10);
  return parsed;
}

function preserveDecimal(n){
    const parsed = parseFloat(n);
    return parsed

}