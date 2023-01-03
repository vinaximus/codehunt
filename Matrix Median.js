A=[1,3,5,7,9];
B=3
console.log(getCounts(A,B));




function getCounts(arr,target) {
    let s=0;
    let e=arr.length-1;
    let m;
    while (s<=e) {
        m=Math.floor((e+s)/2);
        if (arr[m]>target)   e=m-1;
        else if (arr[m]<target) s=m+1;
        else return [m,arr.length-m-1];

    }
    console.log(e);
    if (A[m]<B) m++;
    return [m,arr.length-m];
}