import turtle

sq = turtle.Turtle()
sq.color("red")
sq.penup()
sq.goto(-250,250)
sq.pendown()


for row in range(1,11):
	result = 1
	step = row * 50
	for col in range(1,11):
		result = row * col
		sq.write(result,font=("Times New Roman",20, 'bold'))
		sq.penup()
		sq.forward(50)
		sq.pendown()

	sq.penup()
	sq.goto(-250,250-step)
	sq.pendown()

sq.hideturtle()

turtle.done()
