from tkinter import *
from PIL import Image
import sqlite3

root = Tk()
root.title("Database Application")
root.iconbitmap("icon.ico")

#Database

# Step1-Create a database or connect to one
conn = sqlite3.connect("address_book.db") # Creates and save address_book.db in current dir

# Step2-Create a cursor and interact with database
cur = conn.cursor()

# Step3-Create a table

# Uncomment statements below if the table is created for the first time

# WARNING--CREATE TABLE ONLY ONCE-PUT COMMENT ONCE CREATED

#Default data types:text, text, integer, real, null, blobs
'''
cur.execute("""CREATE TABLE address_table(
			first_name text, 
			last_name text,
			address text,
			city text,
			state text,
			zipcode integer
			)""")

'''
# Submit function
def submit():
	#Database
	# Step1-Create a database or connect to one
	conn = sqlite3.connect("address_book.db") # Creates and save address_book.db in current dir

	# Step2-Create a cursor and interact with database
	cur = conn.cursor()

	# Step3-Create a table
	cur.execute("INSERT INTO address_table VALUES (:f_name,:l_name,:e_address,:e_city,:e_state,:e_zipcode)",
				{
					'f_name': f_name.get(),
					'l_name': l_name.get(),
					'e_address': e_address.get(),
					'e_city': e_city.get(),
					'e_state': e_state.get(),
					'e_zipcode': e_zipcode.get()
				})

	# Step4-Changes to databases are committed
	conn.commit()

	# Step5-Close the connection
	conn.close()

	# Clear the textboxes
	f_name.delete(0,END)
	l_name.delete(0,END)
	e_address.delete(0,END)
	e_city.delete(0,END)
	e_state.delete(0,END)
	e_zipcode.delete(0,END)
	

# Show the records
def query():
	#Database
	# Step1-Create a database or connect to one
	conn = sqlite3.connect("address_book.db") # Creates and save address_book.db in current dir

	# Step2-Create a cursor and interact with database
	cur = conn.cursor()

	# Step3-Query the database; # fecthone() ; fecthmany(10)
	cur.execute("SELECT *, oid FROM address_table")
	records = cur.fetchall()  
	print(records)
	print_records = ''
	for rec in records: # rec will a tuple/row
		print_records = print_records + str(rec) + "\n" # Teach rec[i]

	lbl_query = Label(root, text=print_records)
	lbl_query.grid(row=8,column=0,columnspan=2)

	# Step4-Changes to databases are committed
	conn.commit()

	# Step5-Close the connection
	conn.close()


# Add widgets lables and textbox
f_name_label = Label(root, text="First Name")
f_name_label.grid(row=0,column=0)
f_name = Entry(root,width=30)
f_name.grid(row=0,column=1)

l_name_label = Label(root, text="Last Name")
l_name_label.grid(row=1,column=0)
l_name = Entry(root,width=30)
l_name.grid(row=1,column=1)


e_address_label = Label(root, text="Address")
e_address_label.grid(row=2,column=0)
e_address = Entry(root,width=30)
e_address.grid(row=2,column=1)

e_city_label = Label(root,text="City")
e_city_label.grid(row=3,column=0)
e_city = Entry(root,width=30)
e_city.grid(row=3,column=1)

e_state_label = Label(root,text="State")
e_state_label.grid(row=4,column=0)
e_state = Entry(root,width=30)
e_state.grid(row=4,column=1)

e_zipcode_label = Label(root,text="Zipcode")
e_zipcode_label.grid(row=5,column=0)
e_zipcode = Entry(root,width=30)
e_zipcode.grid(row=5,column=1)

# Submit Button
submit_btn = Button(root,text="Insert",command=submit)
submit_btn.grid(row=6,column=0,padx=10,pady=10,ipadx=100)


# Query Button
query_btn = Button(root,text="Show",command=query)
query_btn.grid(row=7,column=0,padx=10,pady=10,ipadx=100)

# Step4-Changes to databases are committed
conn.commit()

# Step5-Close the connection
conn.close()


root.mainloop()