A = [ 1, 2, 3, 4, 5 ];
B = [ 2, 4, 6, 8 ];
C = 9;
console.table(solve(A,B,C));


function solve (A, B, C){
    let i=0;
    let j=B.length-1;
    let ansi,ansj;
    let target=0;
    let min=Number.MAX_SAFE_INTEGER;
    while (i<A.length && j>-1) {
        let sum=A[i]+B[j];
        if (Math.abs(C-sum)<min) {
            min=Math.abs(C-sum);
            [ansi,ansj]=[i,j];
            if (min==0) break;
        }
        if (sum>C) j--;
        else if (sum<C) i++;

        
    }
    for (let x=0;x<=ansj;x++) {
        if (A[ansi]+B[x]==Math.abs(C+min)) return [A[ansi],A[x]];
    }
    
}