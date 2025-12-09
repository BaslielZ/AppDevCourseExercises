#include <stdio.h>
#include <stdlib.h>
#include "screen.h"

int main()
{
    int a, b, n = 5;
    int arr[10][10];
    int num = 1;
    int i = 0, j = 0;

    while (num <= n * n)
    {
        for (a = 0; a <= j; a++)
        {
            arr[a][j] = num++;
        }
        for (b = j - 1; b >= 0; b--)
        {
            arr[j][b] = num++;
        }
        j++;
    }

    for (int a = 0; a < n; a++)
    {
        for (int b = 0; b < n; b++)
        {
            printf("%3d ", arr[a][b]);
        }
        printf("\n");
    }
    return 0;
}