import turtle

sq = turtle.Turtle()
sq.color("red")

def square_iteration(len):
	for times in range(4):
		sq.forward(len)
		sq.left(90)
	sq.hideturtle()

square_iteration(20)
square_iteration(40)
square_iteration(60)
square_iteration(80)
square_iteration(100)
square_iteration(120)

turtle.done()
