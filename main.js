console.log("linked");

const directory = document.querySelector('#directory');
//creating variable to capture the large div containing the entire customer directory

//as established in customers.js file, the array(list) of customers is called, "customers"???
//***I don't really understand the role of the fucntion and how to write it - where does it go with respect to the loop, and what goes in the parantheses??
function buildCustomerHtml(customers) {
    for (let customer of customers) {
        //create div(box) for each customer to hold name, img, all info
        let customerDiv = document.createElement('div');
        customerDiv.classList.add('customer');
        //create div for just customer name
        let nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.innerText = '${customer.name.first} ${customer.name.last}';
        //create image div
        let imageDiv = document.createElement('img');
        imageDiv.classList.add('image');
        imageDiv.src = customer.picture.medium;
        //create 
    }
}