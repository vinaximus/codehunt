A = [ 1, 1, 2 ];
B = [ 1, 2, 1 ];
console.log(solve(A,B));

function solve(A, B){
    let mpx=new Map();
    let mpy=new Map();
    let count=0;
    const rem=1e9+7;
    for (let x of A) mpx.set(x,mpx.has(x)?mpx.get(x)+1:0);
    for (let x of B) mpy.set(x,mpy.has(x)?mpy.get(x)+1:0);
    for (let i=0;i<A.length;i++) {
        count+=(mpx.get(A[i]))*(mpy.get(B[i]));
        count=count%rem;
    }
    return count;
}