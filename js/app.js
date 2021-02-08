let items = document.querySelector('#courses-list'); 

items.addEventListener('click', addToCart); //putting a listener on courses-list

function addToCart (event){

let x = event.target.className //getting the className where the user click
let number = event.target.getAttribute ('data-id')

    if (x== "add-to-cart"){ //if we click on add to cart then we enter in the switch

            switch (number){ //adding a switch for each article 
                case '1': 
                    console.log("ajout de l'article UIUX" )
                    break;
                
                case '2':
                    console.log("ajout de l'article php" )
                    break;
                    
                case '3':
                    console.log("ajout de l'article reactjs" )  
                    break;

                case '4':
                    console.log("ajout de l'article nodejs" )    
                    break;  
                
                case '5':
                    console.log("ajout de l'article mysql" )    
                    break;  
                
                default: 
                    console.log("Error")    
            }

    }else{ //display a message if something went wrong
        console.log("Error")
    }

}

