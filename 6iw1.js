// Problem 1 : Given an array print the position (starting with 1) and the element in a single line.
let arr=[7,2,9,2,0];
let i=0;
let s="";
let p="";
for(;i<arr.length;i++)
  {
    s=s+arr[i]+" ";
  }
for(i=1;i<=arr.length;i++)
  {
    p=p+i+" ";
  }
console.log("Position:"+p);
console.log("Elements:"+s);