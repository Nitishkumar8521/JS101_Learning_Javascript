// Problem 3 : Given an array of numbers find the average of all the even numbers.
let arr=[1,2,3,4,5,6];
console.log(arr);
let i,sum=0,ave=0;
for(i=0;i<arr.length;i++)
  {
    if(arr[i]%2==0)
    {
      sum+=arr[i];
      ave++;
    }
  }
console.log("Average="+sum/ave);