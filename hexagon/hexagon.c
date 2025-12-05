#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "screen.h"

int main()
{
	clearScreen();
	srand(time(NULL));
	int n;
	printf("Enter a size of hexagon: ");
	scanf("%d", &n);

	if (n < 2)
		return 1;

	FILE *fp = fopen("hexagon_test.txt", "w");
	int totalrows = 2 * n - 1;
	for (int i = 0; i < totalrows; i++)
	{
		int width = n;
		if (i < n)
		{
			width += i;
		}
		else
		{
			width = n + (totalrows - i - 1);
		}
		int pos_x = 40 + (n - width) * 2;
		int pos_y = 10 + i;
		gotoXY(pos_x, pos_y);

		for (int j = 0; j < width; j++)
		{
			int value, r;
			r = rand() % 100;

			if (r < 25)
			{
				value = 10 + rand() % 90;
			}
			else
			{
				value = 100 + rand() % 900;
			}

			printf("%4d", value);
			fprintf(fp, "%4d", value);
		}
		printf("\n");
		fprintf(fp, "\n");
	}
	fclose(fp);
	return 0;
}