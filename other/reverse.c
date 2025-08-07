#include <stdio.h>
#include<conio.h>
#include<math.h>
int main()
{
   int a,i,sum=0,num=0,b=0,temp,temp1,count=0;
   printf("enter a number");
   scanf("%d",&a);
   
   num=a;
   while(a!=0)
   {
     b=a%10;
    printf("%d",b);
     a=a/10;
     
   }


return 0;
}