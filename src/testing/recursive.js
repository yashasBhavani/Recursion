
function fibs(number) {
     let fibsNum = [0,1];

     if (number === 1) return [0];
     if (number === 2) return [0,1];

    for (let i = 2; i < number ; i++) {
       fibsNum.push(fibsNum[i - 2] + fibsNum[i - 1]);
       
    }
    return fibsNum;
}

function fibsRec(number) {
    if (number === 1) return [0];
    if (number === 2) return [0,1];

    let result = fibsRec(number - 1);
    let length = result.length;
    let nextNumber = result[length - 1] + result[length - 2];
    
    return [...result, nextNumber];
}



export {fibs,fibsRec};