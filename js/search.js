let search_bar = document.getElementById("search_bar");
let container = document.getElementById("container");
let courses = document.querySelectorAll(".courses__container .course__item")

search_bar.addEventListener("keyup", displayCourses);

function displayCourses() {
    let userSearch = search_bar.value.toLowerCase(); 
    let coursesArray = createTable();

    for ( i = 0; i < courses.length; i++){ //loop on the courses element size
        const course = courses[i];

        if ( userSearch != "") { //if the search bar isn't empty
            course.style.display = "none"; //disable the course display

            if (coursesArray[i].indexOf(userSearch) > -1) { //if the course is in the user search
                course.style.display = "flex"; //display the searched course

            } else { //else
                course.style.display = "none"; //don't display anything
            }

        } else { //if the search bah is empty
            course.style.display = "flex";//display all the course
        }
    }
}

function createTable() {
    let courses = document.getElementsByClassName("course__item"); //get all the element that have the "course__item" class
    let coursesTitle = document.getElementsByTagName('h4') //get all the h4 element
    let coursesArray = [] //create an array
    
    for (i = 0; i < courses.length; i++){ //loop on the courses element size
        let renderedText = coursesTitle[i].innerText //get the innerText into the courses element
        coursesArray.push(renderedText.toLowerCase()); //put it into a tab
    }
    return coursesArray; //return the tab
}


