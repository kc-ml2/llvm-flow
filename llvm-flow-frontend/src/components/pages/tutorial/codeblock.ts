export const code = {
  c: `#include <stdio.h>
	int main()
	{
	   char title[30];
	   int price, i, num;
	
	   printf("Enter number of books: ");
	   scanf("%d", &num);
	
	   FILE *fptr;
	   fptr = (fopen("C:\\book.txt", "w"));
	   if(fptr == NULL)
	   {
		   printf("Error!");
		   exit(1);
	   }
	
	   for(i = 0; i < num; ++i)
	   {
		  printf("For book%d Enter title: ", i+1);
		  scanf("%s", title);
	
		  printf("Enter price: ");
		  scanf("%d", &price);
	
		  fprintf(fptr,"Title: %s Price=%d", title, price);
	   }
	
	   fclose(fptr);
	   return 0;
	}`,
}
