# Order Pizza

#### Class exercise for Epicodus, 08.25.2017

#### By Rafael Furry

## Description

A web application that calculates the price of a pizza depending on the size of the pizza and how many toppings the user has selected.

## Setup/Installation Requirements

Clone this repo. open the index.html file

## Specs

The submit function creates a variable called toppings and assigns the return value of toppingsChecked() to it.

toppingsChecked creates a variable called inputElems which creates an array out of every element in the html with the class “tops”.

It then creates a variable called toppings and gives it a value of zero.

It then runs through a for loop which increments toppings by one every time it finds a checked box.

toppingsChecked() then returns the value of toppings.

The submit function then creates a variable called size and assigns the size picked by the user using radio buttons.

The submit button then creates a new pizza object with the parameters toppings and size.

It then creates an output which calls the price method in the pizza object.

The price method creates a variable called price which calls the sizePrice() and the toppingPrice() methods inside the pizza object and adds them together.

The sizePrice() method creates a variable called price and assigns 0 to it.

It then uses a if/else if statement which assigns a price to price according to the size of the pizza.

It then returns the value of price.

The toppingPrice() method creates a variable called price and assigns 0 to it.

It then uses a if/else if statement which assigns a price to price according to the size of the pizza and the number of toppings.

It then returns the value of price.

## Technologies Used
HTML

CSS

Javascript

### License

Copyright © 2017 Rafael Furry
