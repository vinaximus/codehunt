A = [-1, 0, 1, 2, 3, 3]
B = [1, 0, 1, 2, 3, 4]

A =[ 6, -5, 3, -6, 3, -9, -8, -7 ];
B = [ 5, 0, -8, 1, -1, 6, 3, -3 ];
/*
B=[1,2,1,5];
A=[2,2,2,2];

 A = [3, 1, 4, 5, 7, -9, -8, 6]
 B = [4, -8, -3, -2, -1, 5, 7, -4]
*/

console.log(solve(A,B));
//console.log(gcd(0,0));

function solve (A,B) {
    let ans=Number.MIN_SAFE_INTEGER;
    let mp=new Map();
    for (let i=0;i<A.length;i++) {
        let xdiff,ydiff,hcf,id,val;
        let repeats=0;
        let max=Number.MIN_SAFE_INTEGER;
        for (let j=i+1;j<A.length;j++) {
            xdiff=A[j]-A[i];
            ydiff=B[j]-B[i];
            if (xdiff==0 && ydiff==0) {
                repeats++;
                continue;
            }
            hcf=gcd(xdiff,ydiff);
            xdiff=Math.floor(xdiff/hcf);
            ydiff=Math.floor(ydiff/hcf);
            id=[xdiff,ydiff].join("-");
            val=(mp.get(id)||1)+1;
            mp.set(id,val);
            max=Math.max(mp.get(id),max);
        }
        ans=Math.max(ans,max+repeats);
        mp.clear();
        }
        return ans;
}

function gcd(a,b) {
    if (a==0) return b;
    if (b==0) return a;
    return gcd(b,a%b);
}