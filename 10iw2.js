//Use the above function to print the Primes from 2 to a given limit
function Isprime(N)
{
  let i=0;
  for(let j=1;j<=N;j++)
    {
      if(N%j==0)
        i++;
    }
  if(i==2)
    console.log(N);
}
for(let i=2;i<=11;i++) //Given limit is 11
  {
    Isprime(i);
  }
console.log("These are the prime number between 2 to 11");