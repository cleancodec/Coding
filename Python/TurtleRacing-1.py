import turtle
from random import *

turtle.title("Racing")
turtle.speed(10)

turtle.penup()
turtle.goto(-250,250)
turtle.pendown()
turtle.right(90)
turtle.forward(250)
turtle.left(90)


for trackno in range(3):
	#Down up
	turtle.penup()
	turtle.forward(50)
	turtle.left(90)
	turtle.pendown()
	turtle.forward(250)

	#Right down
	turtle.right(90)
	
	turtle.penup()
	turtle.forward(50)
	
	turtle.right(90)
	turtle.pendown()
	turtle.forward(250)
	
	turtle.left(90)


# Place Turtles

t1 = turtle.Turtle()
t1.shape('turtle')
t1.color('red')
t1.penup()
t1.goto(-270,250)


t1.penup()
t2 = turtle.Turtle()
t2.shape('turtle')
t2.color('blue')
t2.penup()
t2.goto(-270,125)


t2.penup()
t3 = turtle.Turtle()
t3.shape('turtle')
t3.color('green')
t3.penup()
t3.goto(-270,25)


# Random movement for race

for move in range(100):
	t1.forward(randint(1,5))
	t2.forward(randint(1,5))
	t3.forward(randint(1,5))

turtle.done()
