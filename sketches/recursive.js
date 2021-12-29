console.log('connected')

let times = 3;

let divideByThree = (num) => num/3;
let squareRt = (srNum) => Math.sqrt(srNum).toFixed(2);


let recur= (num)=>{
    let arr = [];
    arr[0]= num;
    if(num < 2 ){
        return console.log('end');
    } else{
       num = divideByThree(num).toFixed(2); //arr[0] - 1; 
       arr.push(num);
       console.log(recur(num));
       recur(num);
       return arr
    }
}
console.log(recur(300));

    // recurDiv(300);


/* // Start Factorial     
let Factorial = (num)=>{
    if(num == 0 || num == 1){
        return 1
    }else{
        let factorialResult = num * Factorial(num-1);
        return factorialResult;
    }
}
console.log(Factorial(7));

Factorial(6);

// End factorial */