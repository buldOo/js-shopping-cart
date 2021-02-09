let search_bar = document.getElementById("search_bar");
let container = document.getElementById("container")
//get the product div
let UX_UI = document.getElementById("UX/UI")
let PHP_8 = document.getElementById("PHP 8")
let React_JS = document.getElementById("React JS")
let Node_JS = document.getElementById("Node JS")
let MySQL = document.getElementById("MySQL")

search_bar.addEventListener("keyup", logValue);

//all the regEx use in the logValue method
expUx = /^[uxi /UXI]+$/i;
expPHP = /^[php PHP]+$/i;
expJS = /^[js JS]+$/i;
expREACT = /^[REACTJS reactjs]+$/i;
expNODE = /^[nodejs NODEJS]+$/i;
expUxSQL = /^[mysql MYSQL]+$/i;

function logValue() {
    //if the search bar isn't empty
    if (search_bar.value != "") {
        //disable the display of the product
        UX_UI.style.display = "none";
        PHP_8.style.display = "none";
        React_JS.style.display = "none";
        Node_JS.style.display = "none";
        MySQL.style.display = "none";

        //if the input is correct in use of the regEx
        if (expUx.test(search_bar.value)) {
            //display the product
            UX_UI.style.display = "";

        } else if (expJS.test(search_bar.value)) {
            React_JS.style.display = "";
            Node_JS.style.display = "";

        } else if (expREACT.test(search_bar.value)) {
            React_JS.style.display = "";

        } else if (expNODE.test(search_bar.value)) {
            Node_JS.style.display = "";

        } else if (expUxSQL.test(search_bar.value)) {
            MySQL.style.display = "";

        } else if (expPHP.test(search_bar.value)) {
            PHP_8.style.display = "";
        } 

    } else {
        //display the product if you clean the search bar
        UX_UI.style.display = "";
        PHP_8.style.display = "";
        React_JS.style.display = "";
        Node_JS.style.display = "";
        MySQL.style.display = "";
    }
}
