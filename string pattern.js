let A="abcdabcdx";
A="aaaaa";
A="bcba";

console.log(solve(A));

function solve (A){
    let lp=[];
    for (let i=A.length;i>=0;i--) {
        let pattern=(A.substring(i,A.length) || "");
        lp=createLPS(pattern+A);
        let len=pattern.length+A.length;
        if (lp[len-2]>=Math.floor(len/2)) return i;

    }
}


//console.log(m);

function createLPS(s) {
    const lps=new Array(s.length);
    lps[0]=0;
    for (let i=0;i<s.length;i++) {
        let x=lps[i-1];
        while (x>=0) {
            if (s[i]==s[x]) {
                lps[i]=x+1;
                break;
            }
            else {
                if (x==0) {
                    lps[i]=0;
                    break;
                }
                x=lps[x-1];
            }
        }
    }
    return lps;
}