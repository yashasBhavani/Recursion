import { fibs } from "./recursive.js";
import { fibsRec } from "./recursive.js";

test('to check fibonacii series is given as output', () => {
    expect(fibs(1)).toEqual([0]);
    expect(fibs(2)).toEqual([0,1]);
    expect(fibs(3)).toEqual([0,1,1]);
    expect(fibs(5)).toEqual([0,1,1,2,3]);
    expect(fibs(7)).toEqual([0,1,1,2,3,5,8]);
}
    
)

test('to check recursive fibonacii series is given as output', () => {
    expect(fibsRec(1)).toEqual([0]);
    expect(fibsRec(2)).toEqual([0,1]);
    expect(fibsRec(3)).toEqual([0,1,1]);
    expect(fibsRec(5)).toEqual([0,1,1,2,3]);
    expect(fibsRec(7)).toEqual([0,1,1,2,3,5,8]);
}
    
)