#pragma once

#define N 20

typedef struct
{
    int min;
    int max;
    char name[N];
} rock;

void send_data(rock);