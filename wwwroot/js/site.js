// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
validatePrice = function ()
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