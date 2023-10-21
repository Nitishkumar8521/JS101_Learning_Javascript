// Problem 2 : Given an array of string count the overall total number of characters
let str="My name is Nitish kumar singh";
console.log("String=" + str);
let count=0,n;
for(let i=0;i<str.length;i++)
  {
    if(str[i]==" ")
      count++;
  }
n=str.length-count;
console.log("Number of charcters with space="+str.length);
console.log("Number of charcters without space="+n);