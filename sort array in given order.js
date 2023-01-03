A = [ 12, 7 ]
B = [ 7, 1, 6, 17, 2, 19, 10 ]

A = [ 16, 17, 20, 4, 3, 3, 16 ]
B = [ 3, 18, 16, 5, 15, 8, 19, 20, 9, 1 ]

A = [ 20, 14, 8, 18, 6 ]
B = [ 1, 16, 7, 6, 17, 3, 13, 8, 19, 20 ]

A = [ 3, 20, 17, 17 ]
B = [ 5, 9, 20, 11, 6, 18, 7, 13 ]
console.log(solve(A,B));

function solve (A, B){
    let st=new Map();
        let mp=new Map();
        let ans=[];
        for (x of A) st.set(x,(st.get(x) || 0)+1);
        for (let i=0;i<B.length;i++){
            if (st.has(B[i])) {
                let index=st.get(B[i]);
                for (let j=0;j<index;j++) ans.push(B[i]);
                st.delete(B[i]);
            }
        }
        let tmp=[];
        for ([k,v] of st) {
            for (let j=0;j<v;j++) tmp.push(k);
        }
        tmp.sort((a,b)=>a-b);
        return ans.concat(tmp);
    
}