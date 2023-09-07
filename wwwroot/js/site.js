// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Here we allow our create job form to add more select options (employees and items) to the form as they need
const selectedEmployees = [];

document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the selected employees and do something with them
    console.log('Selected Employees:', selectedEmployees);

    // You can now send the selected employees to the server or process them as needed.
});


function addEmployee() {
    const employeeSelect = document.getElementById('employee-select');
    const selectedEmployeeValue = employeeSelect.value;
    const selectedEmployeeText = employeeSelect.options[employeeSelect.selectedIndex].text;

    // Check if the employee is already selected
    if (!selectedEmployees.includes(selectedEmployeeValue)) {
        selectedEmployees.push(selectedEmployeeValue);

        // Display the selected employee
        const selectedEmployeesDiv = document.getElementById('selected-employees');
        const selectedEmployeeParagraph = document.createElement('p');
        selectedEmployeeParagraph.textContent = selectedEmployeeText;
        selectedEmployeesDiv.appendChild(selectedEmployeeParagraph);
    }
}


// Here we validate dollar amounts
validateDollar = function ()
{
    let price = $(#price).val();
    let regex = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    if (regex.test(price)) {
        //Input is valid, check the number of decimal places
        var twoDecimalPlaces = /\.\d{2}$/g;
        var oneDecimalPlace = /\.\d{1}$/g;
        var noDecimalPlacesWithDecimal = /\.\d{0}$/g;

        if (value.match(twoDecimalPlaces)) {
            //all good, return as is
            let validPrice = true;
            $(#price).val(price);
        }
        if (value.match(noDecimalPlacesWithDecimal)) {
            //add two decimal places
            price = price + '00';
            let validPrice = true;
            $(#price).val(price);
        }
        if (value.match(oneDecimalPlace)) {
            //ad one decimal place
            price = price + '0';
            let validPrice = true;
            $(#price).val(price);
        }
        //else there is no decimal places and no decimal
        price = price + '.00';
        let validPrice = true;
        $(#price).val(price);
    }

    price = 0.00;
    let validPrice = true;
    $(#price).val(price);

    if (validPrice) $(#NewItemForm).submit();
}