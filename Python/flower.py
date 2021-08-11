import turtle

x = turtle.Turtle()
x.color("red","yellow")
x.begin_fill()

x.speed(10) # speed (0 to 1)

for i in range(100):
	x.forward(200)
	x.left(168.5)

x.penup()
x.forward(300)
x.pendown()

for i in range(100):
	x.forward(200)
	x.left(168.5)

x.end_fill()

turtle.done()