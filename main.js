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
        //create image div
        let imageDiv = document.createElement('img');
        imageDiv.classList.add('image');
        imageDiv.src = customer.picture.medium;
        //create customer name div
        let nameDiv = document.createElement('h3');
        nameDiv.classList.add('name');
        nameDiv.innerText = '${customer.name.first} ${customer.name.last}';
        //create email div
        let emailDiv = document.createElement('div');
        emailDiv.classList.add('email');
        emailDiv.innerText = '${customer.email}';
        //create street address div
        let streetDiv = document.createElement('div');
        streetDiv.classList.add('street');
        streetDiv.innerText = '${customer.location.street.number} ${customer.location.street.name}';
        //create city div
        let cityDiv = document.createElement('div');
        cityDiv.classList.add('city');
        cityDiv.innerText = '${customer.location.city,} {customer.location.state} {customer.location.postcode}';

    }
}