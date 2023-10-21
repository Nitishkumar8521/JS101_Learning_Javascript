function Isprime(N)
{
  let i=0;
  for(let j=1;j<=N;j++)
    {
      if(N%j==0)
        i++;
    }
  if(i==2)
    console.log(N+" is a prime number");
  else
    console.log(N+" is not a prime number");
}
Isprime(11);
Isprime(1);
Isprime(6);