
function fibs(number) {
     let fibsNum = [0,1];

     if (number === 1) return [0];
     if (number === 2) return [0,1];

    for (let i = 2; i < number ; i++) {
       fibsNum.push(fibsNum[i - 2] + fibsNum[i - 1]);
       
    }
    return fibsNum;
}

console.log(fibs(4));

export {fibs};