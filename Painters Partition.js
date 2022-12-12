p=[1,10];
b=2;
t=5;
console.log(minPaintTime(p,b,t));

function minPaintTime(arr, pablo,t) {
    var s=0
    var e=0;
    var ans;
    const rem=1e7+3;
    for (x of arr) {
        s=Math.max(s,x);
        e+=x;
    }
    if (pablo>arr.length) return ((s%rem)*(t%rem))%rem;
    while (s<=e) {
        var m=Math.floor((e+s)/2);
        if (isPossible(arr,pablo,m)) {
            ans=m;
            e=m-1;
        } else {
            s=m+1;
        }
    }
    return ((ans%rem)*(t%rem))%rem;
    
}


function isPossible (arr, pablo, time) {
    let sum=0;
    let count=0;
    for (let i=0;i<arr.length;i++) {
        if (sum+arr[i]>time) {
            count++;
            if (count>pablo) return false;
            sum=arr[i];
        } else {
            sum+=arr[i];
        }
    }
    if (count>=pablo) return false; else return true;
}