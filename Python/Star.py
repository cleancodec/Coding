import turtle

x = turtle.Turtle()
x.color("red","yellow")
x.begin_fill()

for i in range(20):
	x.forward(200)
	x.left(135)


x.end_fill()

turtle.done()