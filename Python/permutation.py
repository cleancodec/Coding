# txt = "dream job 100 and 101"
# y = [int(x) for x in txt.split() if x.isdigit()]
# z = [int(a) for a in y if '9' in str(a)]
# c = [int(k) for k in y if k not in z]
# print(max(c))

# cars = ['Ford', 'BMW', 'Volvo']

# cars.sort(reverse=False)
# print(cars)

import itertools
x = [1,2,3,4]
#for L in range(0, len(x)+1):
for y in itertools.combinations(x,len(x) - 1):
     print(y)