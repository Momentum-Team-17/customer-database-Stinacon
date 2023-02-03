console.log("linked");

const directory = document.querySelector('#directory');
//creating variable to capture the large div containing the entire customer directory

//as established in customers.js file, the array(list) of customers is called, "customers"???
//***I don't really understand the role of the fucntion and how to write it - where does it go with respect to the loop, and what goes in the parantheses??

for (let itemInArray of customers) {
    console.log("itemInArray;", itemInArray);
    buildCustomerHtml(itemInArray);
   //Btw, when the loop is over, "itemInArray" doesn't mean anything, but they have to match
    //I'm starting a loop, and in my loop I'm calling a function.

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); {
    }  
}//This is to be able to call this function below on the names to capitalize the first letter.

//Everything below is inside the loop BECAUSE calling the function by name (above) means everything inside the function below will be executed
function buildCustomerHtml(customer) {
    console.log("customer;", customer);
    //Here, I am defining the function.
    
    //create div(box) for each customer to hold name, img, all info
    let customerDiv = document.createElement('div');
    customerDiv.classList.add('customer');

    //create image div
    let imageDiv = document.createElement('img');
    imageDiv.classList.add('image');
    imageDiv.src = customer.picture.medium;
    
    //create customer name div
    let nameDiv = document.createElement('h3');
    nameDiv.classList.add('name');
    nameDiv.innerText = `${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`;
    
    //create email div
    let emailDiv = document.createElement('div');
    emailDiv.classList.add('email');
    emailDiv.innerText = `${customer.email}`;
    
    //create street address div
    let streetDiv = document.createElement('div');
    streetDiv.classList.add('street');
    streetDiv.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    
    //create city div
    let cityDiv = document.createElement('div');
    cityDiv.classList.add('city');
    cityDiv.innerText = `${customer.location.city} ${customer.location.state} ${customer.location.postcode}`;
    
    //create birthday div
    let birthdayDiv = document.createElement('div');
    birthdayDiv.classList.add('birthday');
    //change the format of the birthdate:
    let birthday = customer.dob.date;
    //^^^^Is this how I declare the variable "date" as this info from the customers file? And do I place it here?
    //trying to convert date to show up in MM, day, YYYY format
    birthday = new Date(birthday).toLocaleDateString('en-us', {month: "short", day: "numeric", year: "numeric"});
    birthdayDiv.innerText = birthday
    
    customerDiv.appendChild(imageDiv);
    customerDiv.appendChild(nameDiv);
    customerDiv.appendChild(emailDiv);
    customerDiv.appendChild(streetDiv);
    customerDiv.appendChild(cityDiv);
    customerDiv.appendChild(birthdayDiv);
    directory.appendChild(customerDiv)
}
}
//inside Text Nodes, call the {capitalizeFirstLetter(string)} function
//Things yet to do:
//add some "appendChild" stuff - comment out all but first div, run the code, then start adding them back in one at a time to see how each thing is working
//Rebecca's example:
//let newElement = document.createElement("div");
// ^^^create a div
// newElement.classList.add("person-block");
// // ^^^add a class to the div to apply style from css
// let nameEl = document.createElement("h2");
// // ^^^create an h2
// let text = document.createTextNode(individual.name);
// // create a texNode for the name
// nameEl.classList.add("name");
// // add a class to the name for style
// nameEl.appendChild(text);
// // put the name text inside the h2
// newElement.appendChild(nameEl);