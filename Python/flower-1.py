import turtle
import math

x = turtle.Turtle()
x.color("blue")
x.speed(10)

for i in range(100):
	#x.forward(math.sqrt(i))
	x.forward(math.sqrt(i)*10)
	x.left(168.5)


x.penup()
x.forward(200)
x.pendown()


for i in range(100):
	#x.forward(math.sqrt(i))
	x.forward(math.sqrt(i)*10)
	x.left(168.5)

turtle.done()