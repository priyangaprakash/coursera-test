var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("numberArray:",numberArray);
//1) first way of implementing filtered array
var filteredArray = numberArray.filter(function(value){
  return value >3;
});
console.log("filtered array:",filteredArray);
//2) second way of implementing filtered array
function above5(value){
    return value>5;
};
var nextFilteredArray = numberArray.filter(above5);
console.log("Another way filter:",nextFilteredArray);
//3) using strings
var shoppingList1 = ["book","pen tool","pencil tool","eraser","sharpner","note"];
console.log("shopping list:",shoppingList1);
var searchval = "tool";
function search(value){
    return value.indexOf(searchval) !== -1;
};
var searchedValue = shoppingList1.filter(search);
console.log("searched Value:",searchedValue);