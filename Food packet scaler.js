var pop=[ 8, 7, 1, 5, 5, 10, 10, 1, 5, 3 ];
var B=17;
console.log(maxFood(pop,B));




function maxFood(A,B) {
    var s=0;
    var e=Number.MAX_SAFE_INTEGER;
    var m;
    var ans;
    for (x of A) e=Math.min(e,x);
    while (s<=e) {
        m=Math.floor((e+s)/2);
        if (isPossible(A,m,B)) {
            ans=m;
            s=m+1;
        } else {
            e=m-1;
        }
    }
    return ans;
}

function isPossible(arr,target,offices) {
    var count=0;
    for (let i=0;i<arr.length;i++) {
        count+=Math.floor(arr[i]/target);
    }
    if (count>=offices) return true; else return false;
}