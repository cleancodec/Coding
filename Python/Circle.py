import turtle


c = turtle.Turtle()

# Basic circle
#c.color("red")
#c.circle(45) # 45 --> radius




# Methodd 1:Tanget circle: Group of circles having commnon tanget
'''
c.circle(45) 
c.circle(55) 
c.circle(65) 
c.circle(75) 
c.circle(85) 
c.circle(95) 
'''

# Method 2:Tanget circle: Group of circles having commnon tanget
'''
radius = 45
for i in range(radius,100,10): # 45,55,65,75,85,95
	c.circle(i) 
'''

# Method 3: Create a circle with fillcolor() and Message
#turtle.fillcolor("red")
#turtle.write(msg, move, align,font=fontname, fontsize, fonttype)

c.color("red","yellow") # red (line), yellow(fillcolor)
c.begin_fill()
c.circle(100)
c.end_fill()

#Now pointer(turtle) is at origin

c.penup()
c.goto(-25,50) # turtle.goto(x,y)
c.pendown()

c.write('Vinod',font=('Times New Roman', 20, 'bold'))

# Make the turtle invisible
c.hideturtle()
'''
# Show turtle
# turtle.showturtle()
'''


turtle.done()
