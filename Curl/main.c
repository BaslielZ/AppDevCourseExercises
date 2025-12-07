#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "appdev.h"

int main()
{
    srand(time(NULL));
    rock r;
    printf("Application Developers Rock!\n");
    printf("Enter rocker's name: ");
    scanf("%s", r.name);
    r.max = rand() % 50 + 51;
    r.min = rand() % 50 + 1;
    send_data(r);
    printf("Rockn' Roll\n");
    return 0;
}