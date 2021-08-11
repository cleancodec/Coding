import turtle

x = turtle.Turtle()

# Color
# x.color("red")----> "green", "blue", "cyan", "orange"


x.color("blue","cyan") # blue (line color) and cyan(fill color)
x.begin_fill()

# Square-I
x.forward(100)              
x.left(90)

x.forward(100) # vertical line

x.left(90)

x.forward(100) # left vertical

x.left(90)
x.forward(100) # down vertical line

# Penup
x.penup()
x.forward(100)
x.pendown()

# Square-II
x.forward(100) 
x.left(90)
x.forward(100)
x.left(90)
x.forward(100)
x.left(90)
x.forward(100)

x.end_fill()

turtle.done()