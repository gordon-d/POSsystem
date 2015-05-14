//Gordon's POS System

//Constructor for the Check Object, which will store the price data
var Check = function Check(){
	this.total = 0
	this.tax = 0
}

//Insubstantiate the check
var check = new Check()


//Array holding all of the menu items, stored as key value objects
var allItems = [

	{
		id: "beer",
		display: "Beer",
		price: 7,
		type: "drink item",
	},
	{
		id: "redWine",
		display: "Red Wine",
		price: 9,
		type: "drink item",
	},
	{
		id: "whiteWine",
		display: "White Wine",
		price: 9,
		type: "drink item"
	},
	{
		id: "nachos",
		display: "Nachos",
		price: 10,
		type: "app item",
	},
	{
		id: "calamari",
		display: "Fried Calamari",
		price: 11,
		type: "app item",
	},
	{
		id: "avoToast",
		display: "Avocado Toast",
		price: 10,
		type: "app item",
	},
	{
		id: "burger",
		display: "Burger",
		price: 13,
		type: "entree item",
	},
	{
		id: "steak",
		display: "Steak",
		price: 17,
		type: "entree item",
	},
	{
		id: "iceCream",
		display: "Ice Cream",
		price: 8,
		type: "dessert item",
	}
]


//Function to generate the POS grid
var buildColumns = function(allItems){

	//Will generate a <div> for each item in the allItems array
	for (var i = 0; i < allItems.length; i++){
		var currentItem = allItems[i]

		//Each if statement checks the type of item to generate the <div> in the correct column
		//The div is created and then has data stored that saves its index in the allItems array, for easy access to price and name
		if (currentItem.type === "drink item"){

			$("#beverages").append("<div id='" + currentItem.id + "' class='" + currentItem.type + "'>" + currentItem.display + "<br>$" + currentItem.price + "</div>")
			$("#" + currentItem.id).data("index",i)

		} else if (currentItem.type === "app item"){

			$("#appetizers").append("<div id='" + currentItem.id + "' class='" + currentItem.type + "'>" + currentItem.display + "<br>$" + currentItem.price + "</div>")
			$("#" + currentItem.id).data("index",i)

		} else if (currentItem.type === "entree item"){

			$("#entrees").append("<div id='" + currentItem.id + "' class='" + currentItem.type + "'>" + currentItem.display + "<br>$" + currentItem.price + "</div>")
			$("#" + currentItem.id).data("index",i)
		
		} else if (currentItem.type === "dessert item"){

			$("#desserts").append("<div id='" + currentItem.id + "' class='" + currentItem.type + "'>" + currentItem.display + "<br>$" + currentItem.price + "</div>")
			$("#" + currentItem.id).data("index",i)
		}
	}

	//Adds the event listener for adding the clicked on item to the check
	$(".item").click(addItem)
}


//Function to add the price and name of the item to the check (an unordered list)
var addItem = function(){

	//Variables for legibility; they represent the displayed name as well as the price of the item as taken from the allItems array using the data index
	var addedItem = allItems[$(this).data().index].display
	var addedCost = allItems[$(this).data().index].price
	
	//Adds the price of the item to the check.total attribute and calculates the current tax
	check.total += addedCost
	check.tax = check.total * .08875
	
	//Creates the new list item in the check list, including the name and price
	$("#check").append("<li>" + addedItem + " -- $" + addedCost + "</li>")

	//Carries over the index data, for use with the compItem function, which is also added with an event listener to the item
	$("li").last().data("index", $(this).data().index)
	$("li").last().click(compItem)
	
	//Updates the values of the Cost (sum of the item prices), the Tax (%8.875 of the Cost), and the Total (sum of Cost and Tax)
	$("#itemCost").text("Cost = $" + check.total)
	$("#itemTax").text("Tax = $" + Math.floor(check.tax * 100)/100)
	$("#total").text("Total = $" + (Math.floor((check.total + check.tax) * 100) / 100))
	$("#check").scrollTop(9999999999)
}


//Function to remove a list item from the check, and to update the Cost, Tax, and Total values. 
var compItem = function(){

	//Variable for legibility
	var removedCost = allItems[$(this).data().index].price

	//Removes the price of the item from the check.total attribute, and updates the current tax
	check.total -= removedCost
	check.tax = check.total * .08875

	//Updates the values of the Cost (sum of the item prices), the Tax (%8.875 of the Cost), and the Total (sum of Cost and Tax)
	$("#itemCost").text("Cost = $" + check.total)
	$("#itemTax").text("Tax = $" + Math.floor(check.tax * 100)/100)
	$("#total").text("Total = $" + (Math.floor((check.total + check.tax) * 100) / 100))

	//Removes the list item from the DOM
	$(this.remove())
}

//Generates the POS items
buildColumns(allItems)











