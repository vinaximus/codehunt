A = [1, 4, 10]
B = [2, 15, 20]
C = [10, 12]
A = [3, 5, 6]
B = [2]
C = [3, 4]
console.log(minimize(A,B,C));

function minimize(A, B, C){
    let max=Number.MIN_SAFE_INTEGER;
    let [i,j,k]=[0,0,0];
    let min=Number.MAX_SAFE_INTEGER;
    while (i<A.length && j<B.length && k<C.length) {
        let [absij,absjk,abski]=[Math.abs(A[i]-B[j]),Math.abs(B[j]-C[k]),Math.abs(C[k]-A[i])];
        max=Math.max(absij,absjk,abski);
        min=Math.min(min,max);
        //if (i==A.length-1 && j==B.length-1 && k==C.length-1) break;
        if (absij==max) if (A[i]>B[j]) j++; else i++;
        else if (absjk==max) if (B[j]>C[k]) k++; else j++;
        else if (abski==max) if (C[k]>A[i]) i++; else k++;
        //if (i==A.length) i==A.length-1;
        //if (j==B.length) j==B.length-1;
        //if (k==C.length) k==C.length-1;
    }
    return min;
}