k, l = map(int,input("Enter 2 numbers :").split())
count = 0
for i in range(k,l):
    if i > 7 :
        pass
        if i % 2 == 0 or i % 3 == 0 or i % 5 == 0 or i % 7 ==0 :
            pass
        else:
            h  = i + 6
            if i % 2 == 0 or i % 3 == 0 or i % 5 == 0 or i % 7 ==0 :
                pass
            elif h < l:
                count += 1
                print("({},{})".format(i,h))
    else:
        pass
print("count is {}".format(count))