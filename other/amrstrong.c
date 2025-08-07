#include <stdio.h>
#include<conio.h>
#include<math.h>
int main()
{
   int a,i,sum=0,num=0,b=0,temp,temp1,count=0;
   printf("enter a number");
   scanf("%d",&a);
   temp1=a;
   while(temp1!=0)
   {
      temp1= temp1/10;
       count++;
   }
   
   num=a;
   while(a!=0)
   {
     b=a%10;
     sum=sum+pow(b,count);
     a=a/10;
     
   }
if(num==sum)
{
    printf("the number is amrstrong");
}
else
{
    printf("not");
}
    return 0;
}