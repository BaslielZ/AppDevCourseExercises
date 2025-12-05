#pragma once
#include <stdio.h>

void gotoXY(int x, int y)
{
    printf("\x1b[%d;%dH", y, x);
}

void clearScreen()
{
    printf("\x1b[2J");
}