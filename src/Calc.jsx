
function add(a,b){
    let sum=a+b;
    return sum;
}

function Multiply(a,b){
    let mult=a * b;
    return mult;
}

function Divide(a,b){
    let div=a/b;
    div=div.toFixed(2);
    return div;
}

function Subtract(a,b){
    let sub=a-b;
    return sub;
}

export default add;

export {Multiply,Divide,Subtract};

