var Check = function Check(){
	this.total = 0
	this.tax = 0
	this.items = []

}

var check = new Check()

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
]

var buildColumns = function(allItems){
	for (var i = 0; i < allItems.length; i++){
		currentItem = allItems[i]
		if (currentItem.type === "drink item"){
			$("#beverages").append("<div id='" + currentItem.id + "' class='" + currentItem.type + "'>" + currentItem.display + "<br>$" + currentItem.price + "</div>")
			$("#" + currentItem.id).data("index",i)
		} else if (currentItem.type === "app item"){
			$("#appetizers").append("<div id='" + currentItem.id + "' class='" + currentItem.type + "'>" + currentItem.display + "<br>$" + currentItem.price + "</div>")
			$("#" + currentItem.id).data("index",i)
		} else if (currentItem.type === "entree item"){
			$("#entrees").append("<div id='" + currentItem.id + "' class='" + currentItem.type + "'>" + currentItem.display + "<br>$" + currentItem.price + "</div>")
			$("#" + currentItem.id).data("index",i)
		}
	}
	$(".item").click(addItem)
}

var addItem = function(){
	check.total += allItems[$(this).data().index].price
	check.tax = check.total * .08875
	check.items.push(allItems[$(this).data().index].display)
}

buildColumns(allItems)











