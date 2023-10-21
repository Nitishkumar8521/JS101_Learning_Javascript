//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let user_name="Nitish";
let user_password=12;
let username="Nitish";
let userpassword=12;
if(username==user_name)
{
  if(userpassword==user_password)
  {
    console.log("login");
  }
  else
  {
    console.log("password is incorrect");
  }
}
else
{
  console.log("user not login");
}