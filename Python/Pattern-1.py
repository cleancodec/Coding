import turtle
import math

x = turtle.Turtle()
x.color("cyan")
x.speed(10)

for i in range(500):
	#x.forward(math.sqrt(i))
	x.forward(math.sqrt(i))
	x.left(i%180)
	
turtle.done()