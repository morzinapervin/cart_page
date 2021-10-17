
var cartTotal = document.getElementById('cart-total');
var alertmsg1 = document.getElementById('alert-message1');
var alertmsg2 = document.getElementById('alert-message2');
var subTotal = document.getElementById('subtotal');
var shippingCharge = document.getElementById('shipping');
var total = document.getElementById('total');
var payable = document.getElementById('payable');








// decreaseNumber function
function decreaseNumber(incdec, itemprice) {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
  
    
    // console.log(itemprice)

    if ( itemval.value <= 1 ) {
        itemval.value = 1;
        alert('Quantity cannot be less than 1');
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.backgroundColor = '#fff';
        itemval.style.color = '#000';

        if ( itemprice.id ==='price1') {
            
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 204;
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) - 204;
        subTotal.innerHTML = parseInt(subTotal.innerHTML) - 204 + "TK.";
        total.innerHTML = parseInt(total.innerHTML) - 204 + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) - 204 + "TK.";
        
    } else {
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 128;
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) - 128;
        subTotal.innerHTML = parseInt(subTotal.innerHTML) - 128 + "TK.";
        total.innerHTML = parseInt(total.innerHTML) - 128 + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) - 128 + "TK.";
    }

    }
     

}


// IncreaseNumber function
function increaseNumber(incdec, itemprice) {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if ( itemval.value >= 5) {
        itemval.value = 5;
        alert('Max 5 allowed');
        itemval.style.backgroundColor = 'red';
        itemval.style.color = '#fff';

    } else {
        itemval.value = parseInt(itemval.value) + 1;
        if ( itemprice.id ==='price1') {
            
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 204;
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) + 204;
        subTotal.innerHTML = parseInt(subTotal.innerHTML) + 204 + "TK.";
        total.innerHTML = parseInt(total.innerHTML) + 204 + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) + 204 + "TK.";

        } else {

        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 128;
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) + 128;
        subTotal.innerHTML = parseInt(subTotal.innerHTML) + 128 + "TK.";
        total.innerHTML = parseInt(total.innerHTML) + 128 + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) + 128 + "TK.";
    }

       

    }
    
}


// deleteBtn function
function deleteBtn(rmvitem, itemprice) {
    var item = document.getElementById(rmvitem);
    var itemprice = document.getElementById(itemprice);
 

    if ( item.id === 'cart-item1' & itemprice.id === 'price1') {
        item.style.display = 'none';
        alertmsg1.style.display = 'block';
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) - parseInt(itemprice.innerHTML);
        // console.log(itemprice.innerHTML);
        subTotal.innerHTML = parseInt(subTotal.innerHTML) - parseInt(itemprice.innerHTML) + "TK.";

        total.innerHTML = parseInt(total.innerHTML) - parseInt(itemprice.innerHTML) + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) - parseInt(itemprice.innerHTML) + "TK.";
       
        
    } else {
        item.style.display = 'none';
        alertmsg2.style.display = 'block';
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) - parseInt(itemprice.innerHTML);
        subTotal.innerHTML = parseInt(subTotal.innerHTML) - parseInt(itemprice.innerHTML) + "TK.";

        total.innerHTML = parseInt(total.innerHTML) - parseInt(itemprice.innerHTML) + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) - parseInt(itemprice.innerHTML) + "TK.";
        
    }

    if(cartTotal.innerHTML === '0'){
        // console.log(subTotal.innerHTML);
        
        total.innerHTML = 0 + 'TK.';
        // console.log(total.innerHTML);
        
        payable.innerHTML = 0 + 'TK.';
        // console.log(payable.innerHTML);

        shippingCharge.innerHTML = 0 + 'TK.';
        // console.log(shippingCharge.innerHTML);    

    } 

  

}


// undoDelete function 
function undoDelete(rmvitem, itemprice) {
    var item = document.getElementById(rmvitem);
    var itemprice = document.getElementById(itemprice);
    // var alertmsg1 = document.getElementById('alert-message1');
    // var alertmsg2 = document.getElementById('alert-message2');

    if ( item.id === 'cart-item1' & itemprice.id === 'price1') {
        item.style.display = 'block';
        alertmsg1.style.display = 'none';
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) + parseInt(itemprice.innerHTML);
        // console.log(itemprice.innerHTML);
        subTotal.innerHTML = parseInt(subTotal.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";

        total.innerHTML = parseInt(total.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        
    } else {
        item.style.display = 'block';
        alertmsg2.style.display = 'none';
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) + parseInt(itemprice.innerHTML);
        subTotal.innerHTML = parseInt(subTotal.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
         

        total.innerHTML = parseInt(total.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        payable.innerHTML = parseInt(payable.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";

        
    }

    if(cartTotal.innerHTML === '0') {
        shippingCharge.innerHTML = 0
    } else {

     countryOption();
        
        
    }



   
}


// crossBtn function 
function crossBtn(alertmsg) {
    var msg = document.getElementById(alertmsg);
    

    if ( msg.id === 'alert-message1') {
        msg.remove();
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) + parseInt(itemprice.innerHTML);
        // console.log(itemprice.innerHTML);
        subTotal.innerHTML = parseInt(subTotal.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        total.innerHTML = parseInt(total.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        payable.innerHTML = parseInt(total.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        
    } else {
        msg.remove();
        cartTotal.innerHTML = parseInt(cartTotal.innerHTML) + parseInt(itemprice.innerHTML);
        subTotal.innerHTML = parseInt(subTotal.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        total.innerHTML = parseInt(total.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        payable.innerHTML = parseInt(total.innerHTML) + parseInt(itemprice.innerHTML) + "TK.";
        
    }

}



// country-option
function countryOption() {
     var selectOption = document.getElementById('country_option').value;

  

     if ( selectOption === '1' ) {
         shippingCharge.innerHTML =  `50TK.`;
         total.innerHTML = parseInt(subTotal.innerHTML) + 50 + `TK.`;
         payable.innerHTML = parseInt(subTotal.innerHTML)+ 50 + `TK.`;
     } else if (selectOption === '2') {
         console.log(selectOption)
        shippingCharge.innerHTML =  `100TK.`
        total.innerHTML = parseInt(subTotal.innerHTML) + 100 + `TK.`;
        payable.innerHTML = parseInt(subTotal.innerHTML) + 100 + `TK.`;
     }

}