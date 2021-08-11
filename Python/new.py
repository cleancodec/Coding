def shape(n):
    lst = list("*"*n)
    i = 1
    k =0
    p = 1
    while n > 0 :
        k = n//2
        lst[k] = " "
        printS(lst)
        n = n - i
        i = 2

def printS(lst):
    for a in lst:
        print(a + " ", end='')
    print("")

shape(13)