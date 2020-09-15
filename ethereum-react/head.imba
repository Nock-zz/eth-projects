# Strings
var single = 'single quotes'
var double = "double quotes"
var interpolation = "string has {double}"

# Numbers
var integer = 42
var float = 42.10

# Objects
var object = {name: 'Imba', type: 'Language'}

# Arrays
var array = [1,2,3,4,5]

# Regular expressions
var regex = /number is (\d+)/

# Functions
def hello
	console.log 'got here'
	return 'world'

# Classes
class Todo
	# automatic getter/setter declaration
	prop title

	def initialize title
		# instance variables
		@title = title
		@completed = no

	def complete
		@completed = yes

# Tags
var item = <div.header> "This is a div"
var list = <ul.list> for item in ["one","two","three"]
	<li> <span.name> item
