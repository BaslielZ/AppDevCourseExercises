#include <stdio.h>
#include "screen.h"

int main()
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    clearScreen();

    for (int i = 0; i < 2 * n - 1; i++)
    {
        int p = n;
        int flag = 0;

        gotoXY(40 + (n - i), 10 + i);
        for (int j = 0; j <= i; j++)
        {
            if (j <= i / 2)
            {
                printf("%d ", p--);
            }
            else if (i % 2 == 0 && j == (i / 2) + 1 && j != 0)
            {
                printf("%d ", p += 2);
            }

            else
            {
                printf("%d ", ++p);
            }
        }
        printf("\n");
    }
}