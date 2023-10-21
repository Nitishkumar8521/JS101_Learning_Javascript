//Write a function to replace spaces in a given string with - .
function replace_space(str1)
{
  let str="";
  for(let i=0;i<str1.length;i++)
    {
      if(str1[i]==" ")
        str+="-";
      else
        str+=str1[i];
    }
  console.log(str);
}
replace_space("Nitish kumar");