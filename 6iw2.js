// Problem 2 : Given a character in lower case print the upper case character
let ch='i';
let arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let arr1=['a','b','c','d','e','f','g','h','i','j','k','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for(let i=0;i<arr.length;i++)
  {
    if(arr1[i]==ch)
      console.log(arr[i]);
  }