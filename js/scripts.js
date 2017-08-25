function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
};

Pizza.prototype.sizePrice = function() {
    var price = 0;
    if(this.size == "small"){
        price = 9.99;
    } else if(this.size == "medium"){
        price = 13.99;
    } else if(this.size == "large"){
        price = 15.99;
    } else if(this.size == "xtra-large"){
        price = 18.49;
    }
    return price;
};

Pizza.prototype.toppingPrice = function() {
        var price = 0;
        if(this.size == "small"){
            price = this.toppings * 1.75;
        } else if(this.size == "medium"){
            price = this.toppings * 2;
        } else if(this.size == "large"){
            price = this.toppings * 2.25;
        } else if(this.size == "xtra-large"){
            price = this.toppings * 2.50;
        }
        return price;
}

Pizza.prototype.price = function() {
        var price = this.sizePrice()  + this.toppingPrice();
        price = price.toFixed(2);
        return price;
}

function toppingsChecked(){
        var inputElems = document.getElementsByClassName("tops"),
        toppings = 0;
        for (var i=0; i<inputElems.length; i++) {
                if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
                toppings++;
                }
        }
        return toppings;
}

$(document).ready(function() {
        $("#pizza-form").submit(function(event){
                event.preventDefault();
                var toppings = toppingsChecked();
                var size = $("input[name='pizza-size']:checked").val();
                var pizza = new Pizza(toppings, size);
                $("#total-price").text(pizza.price());

        });
});
