
A = [ 1, 1, 2, 2 ];
B = [ 1, 2, 1, 2 ];
console.log(solve(A,B));
function solve(A, B){
    let st=new Set();
    let ans=0;
    for (let i=0;i<A.length;i++) {
        st.add([A[i],B[i]].join("-"));
    }
    for (let i=0;i<A.length;i++) {
        for (let j=i+1;j<A.length;j++) {
            if (A[i]!=A[j] && B[i]!=B[j]) {
                let key1=[A[i],B[j]].join("-");
                let key2=[A[j],B[i]].join("-");
                if (st.has(key1) && st.has(key2)) {
                    ans++;
                }
            }
        }
    }
    return ans;
}