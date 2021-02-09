let items = document.querySelector('#courses-list'); 

items.addEventListener('click', addToCart); //putting a listener on courses-list

function addToCart (event){

let x = event.target.className //getting the className where the user click
let number = event.target.getAttribute ('data-id')

    if (x == "add-to-cart"){ //if we click on add to cart then we enter in the switch

            switch (number){ //adding a switch for each article 
                case '1': 
                    itemTable('UI/UX', '9,99')
                    console.log("ajout de l'article UIUX" )
                    break;
                
                case '2':
                    itemTable('php', '9,99')
                    console.log("ajout de l'article php" )
                    break;
                    
                case '3':
                    itemTable('reactJS', '9,99')
                    console.log("ajout de l'article reactjs" )  
                    break;

                case '4':
                    itemTable('NodeJS', '9,99')
                    console.log("ajout de l'article nodejs" )    
                    break;  
                
                case '5':
                    itemTable('mySQL', '9,99')
                    console.log("ajout de l'article mysql" )    
                    break;  
                
                default: 
                    console.log("Error")    
            }

    }else{ //display a message if something went wrong
        console.log("Error")
    }
    //.push
}
function addElement (String, id) {
    let newDiv = document.createElement("div");
    document.getElementById(id).append(newDiv, String);
}

let i = null;
let j = null;

function generate_table() {
    // get the reference for the body
    var body = document.getElementById("tr1");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (i = 0; i < 1; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (j = 0; j < 3; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, 
        var cell = document.createElement("td");
        
        if(i == 0 && j== 0){
            var cellText = document.createTextNode("Article");
        } else if (i == 0 && j== 1){
            var cellText = document.createTextNode("Prix");
        } else if (i == 0 && j== 2){
            var cellText = document.createTextNode("qantité");    
        }
        
        //and put the <td> at the end of the table row
        cell.appendChild(cellText);
        row.appendChild(cell);
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }
}


//on appelle la fonction create table
generate_table()

function itemTable(article, prix){
    // get the reference for the body
    var body = document.getElementById("tr1");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (i = 0; i < 1; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (j = 0; j < 3; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        
        if(i == 0 && j== 0){
            var cellText = document.createTextNode(article);
        } else if (i == 0 && j== 1){
            var cellText = document.createTextNode(prix+'€');
        } else if (i == 0 && j== 2){
            var cellText = document.createTextNode('1');    
        }
        
        cell.appendChild(cellText);
        row.appendChild(cell);
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }
}