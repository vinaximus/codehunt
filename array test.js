A=23;
console.log(colorful(A));

function colorful (A){
        let arr=[];
        let st=new Set();
        while (A>0) {
            arr.push(A%10);
            A=Math.floor(A/10);
        }
        for (let i=0;i<arr.length;i++) {
            let product=1;
            for (let j=i;j<arr.length;j++) {
                product*=arr[j];
                if (st.has(product)) return 0;
                st.add(product);
            }
        }
        return 1;
	}