 //Write a function to check if the char is a small case or not.
function Issmall_case(n)
{
  let str="abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<str.length;i++)
    {
      if(str[i]===n)
      { 
        console.log(n+": is a small case");
        return ;
      }
    }
  console.log(n+": is not a small case");
}
Issmall_case("N");
Issmall_case("n");