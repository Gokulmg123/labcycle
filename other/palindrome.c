#include <stdio.h>
#include<conio.h>
#include<math.h>
#include<string.h>

int main()
{
   int i,flag=1,len;
   char str[50];
   printf("enter a string");
   scanf("%s",str);
   len=strlen(str);
   for(i=0;i<=len/2;i++)
   {
       if(str[i]!=str[len-1-i]){
           flag=0;
           break;
       }
       
   }
if(flag==1){
    printf("palindrome");
}
else
{
    printf("not palindrome");
}

return 0;
}