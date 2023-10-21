// Problem 4: Given 3 numbers (all different values), print which is greatest
let a=5,b=10,c=30;
console.log("a="+a);
console.log("b="+b);
console.log("c="+c);
if(a>b)
{
  if(a>c)
  {
    console.log("a="+a+" is greatest");
  }
  else
  {
    console.log("c="+c+" is greatest");
  }
}
else
{
  if(b>c)
  {
    console.log("b="+b+" is greatest");
  }
  else
  {
    console.log("c="+c+" is greatest");
  }
}