let items = document.querySelector('#courses-list'); 
let Empty = document.querySelector('.emptyCart');

items.addEventListener('click', addToCart); //putting a listener on courses-list

Empty.addEventListener('click',emptyBasket);

function addToCart (event){

let x = event.target.className //getting the className where the user click
let number = event.target.getAttribute ('data-id')

    if (x == "add-to-cart"){ //if we click on add to cart then we enter in the switch

            switch (number){ //adding a switch for each article 
                case '1': 
                    itemTable('UI/UX', '9,99')
                    console.log("Adding UIUX" )
                    break;
                
                case '2':
                    itemTable('php', '9,99')
                    console.log("Adding php" )
                    break;
                    
                case '3':
                    itemTable('reactJS', '9,99')
                    console.log("Adding reactjs" )  
                    break;

                case '4':
                    itemTable('NodeJS', '9,99')
                    console.log("Adding nodejs" )    
                    break;  
                
                case '5':
                    itemTable('mySQL', '9,99')
                    console.log("Adding mysql" )    
                    break;  
                
                default: 
                    console.log("Error")    
            }

    }else{ //display a message if something went wrong
        console.log("Error")
    }
    
}

let i = null;
let j = null;
var tab = []; // declare an array to insert an object

var sqte = 0

var tblBody = document.getElementById("tableBody");

function itemTable(article, prix){
    
    // creates a balise <tr>
    var row = document.createElement("tr");
    row.className ="row"
    var obj = {}; // We declare an object
  
    //creating all column
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    var cell = document.createElement("td"); //Leaving an empty space
    var cellText = document.createTextNode(' ');
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell1 = document.createElement("td"); //Putting a string under article to stock the name of the product
    var cellText1 = document.createTextNode(article);
    cell1.appendChild(cellText1);
    row.appendChild(cell1);
    obj.article = cellText1.nodeValue; // We affect the value to this key

    var cell2 = document.createElement("td"); // Getting the getAttribute
    var cellText2 = document.createTextNode (prix + '€');
    cell2.appendChild(cellText2)
    row.appendChild(cell2);
    obj.price = cellText2.nodeValue; // Same thing for the price

    var cell3 = document.createElement("td"); // Adding quantity under quantity category
    var cellText3 = document.createTextNode("1");
    cell3.appendChild(cellText3);
    row.appendChild(cell3); 
    obj.qty = cellText3.nodeValue; // '' for the quantity
    

    var cell4 = document.createElement("td"); // Adding a cross that will serve as a supress button
    var cellText4 = document.createTextNode('❌');

    var deletebtn = document.createElement("span")
    //add a classname in the <span>
    deletebtn.className = "delete"

    deletebtn.appendChild(cellText4)
    cell4.appendChild(deletebtn)

    row.appendChild(cell4);

    console.log(tblBody)

    let strBasket = JSON.stringify(obj) // We stringify the object to pass it to the array
    tab.push(strBasket); // We push in the array the stringified object
    localStorage.setItem("cart",tab); // We pick the array
  
    // add the row to the end of the table body
    tblBody.appendChild(row);

    //recover and listen to the click of the deletion
    let cross = document.getElementsByClassName('delete'); 
    for (i = 0; i < cross.length; i++) {
        cross[i].addEventListener("click", deleteItem);
    }
 
}


localStorage.getItem("cart"); // We get the array to keep in the local storage



function deleteItem(event){
    console.log('Removing a Article')
    event.target.parentNode.parentNode.remove() 
    //We are getting back 2 time to get to the class of the item to delete it
    localStorage.removeItem("cart");
    //We remove all articles from the localstorage when the user remove the artcile in the cart
}

function emptyBasket(event){
    console.log('Removing all Article')
    event.target.appendChild.remove();

    localStorage.removeItem("cart");

}



