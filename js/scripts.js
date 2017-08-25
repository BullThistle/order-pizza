function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.price = function() {
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
    return this.firstName + " " + this.lastName;
};

function toppingsChecked(){
        var inputElems = document.getElementById("toppings"),
        toppings = 0;
        for (var i=0; i<inputElems.length; i++) {
                if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
                toppings++;
                }
        }
        return toppings;
}

$(document).ready(function() {




})
