//A : [ 5, 82, 52, 66, 16, 37, 38, 44, 1, 97, 71, 28, 37, 58, 77, 97, 94, 4, 9 ]
//B : 16

var bk=[ 73, 58, 30, 72, 44, 78, 23, 9 ];
var b=5;

//bk=[12,34,67,90];
//b=4;


console.log(minBooks(bk,b));



//var m=checkBooks(bk,b,73);
//console.log(m[0]);
//console.log(m[1]);
//


function minBooks (A,B) {
    var s=Number.MAX_SAFE_INTEGER;
    var e=0;
    var ans=Number.MAX_SAFE_INTEGER;;
    for (x of A) {
        s=Math.min(s,x);
        e+=x;
    }

    while (s<=e) {
        var m=Math.floor((e+s)/2);
        var res=checkBooks(A,B,m);
        if (res[1]==true) {
            ans=Math.min(ans,res[0]);
            s=m+1;
        } else {
            e=m-1;
        }
    }

    for (x of A) {
        s=Math.min(s,x);
        e+=x;
    }

    while (s<=e) {
        var m=Math.floor((e+s)/2);
        var res=checkBooksReverse(A,B,m);
        if (res[1]==true) {
            ans=Math.min(ans,res[0]);
            s=m+1;
        } else {
            e=m-1;
        }
    }

    return ans;

}


function checkBooks(arr,target,pages) {
    var i=0;
    var pageCount=0;
    var max=Number.MIN_SAFE_INTEGER;
    var ans=[];
    while (i<arr.length) {
        pageCount+=arr[i];
        if (i==arr.length-1 || pageCount>=pages) {
            target--;
            max=Math.max(pageCount,max);
            pageCount=0;
        }
        i++;
    }
    ans.push(max);
    ans.push(target==0? true:false);
    return ans;
}

function checkBooksReverse(arr,target,pages) {
    var i=arr.length-1;
    var pageCount=0;
    var max=Number.MIN_SAFE_INTEGER;
    var ans=[];
    while (i>=0) {
        pageCount+=arr[i];
        if (i==0 || pageCount>=pages) {
            target--;
            max=Math.max(pageCount,max);
            pageCount=0;
        }
        i--;
    }
    ans.push(max);
    ans.push(target==0? true:false);
    return ans;
}