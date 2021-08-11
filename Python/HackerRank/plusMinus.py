#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Write your code here  
  n  = len(arr)
  print("{0:.6f}".format(arr.count(1)/n))
  print("{0:.6f}".format(arr.count(-1)/n))
  print("{0:.6f}".format(arr.count(0)/n))

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
