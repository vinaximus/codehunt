A=1525;
B=999996223;
console.log(solve(A,B));


function solve(A, B){
    return Number((powerOf(A,(B-2),B)%BigInt(B)));
}

function powerOf(a,b,rem) {
    const steps=[];
    let bigAns=BigInt(1);
    let bigRem=BigInt(rem);
    let bigA=BigInt(a);
    pv=b
    while (pv>=1) {
        
        steps.push(pv%2);
        if (pv%2==0)pv=pv/2; else pv--;
    }
    while (steps.length>0) {
        bigAns*=steps.pop()==0?bigAns:bigA;
        bigAns=bigAns%bigRem;
    }
    return bigAns%bigRem;
}