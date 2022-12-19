A = [ 2, 1, -9, -7, -8, 2, -8, 2, 3, -8 ];
B=-1;
console.log(threeSumClosest(A,B));


function threeSumClosest(A, B){
        A.sort((a,b)=>a-b);
        let min=Number.MAX_SAFE_INTEGER;
        let minSum=0;
        let sum=0;
        let r=A.length-1;
        let n=A.length;
        for (i=0;i<n-2;i++) {
            let l=i+1;
            while (l<r) {
                sum=A[i]+A[l]+A[r];
                if (min>Math.abs(B-sum)) {
                    min=Math.abs(B-sum);
                    minSum=sum;
                }
                
                if (sum<B) l++;
                else if (sum>B) r--;
                else return sum; 
            }

        }
        return minSum;
	}