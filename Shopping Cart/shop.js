$(document).ready(function(){
var mobile=$('#button1');
var mTshirt=$('#button2');
var fTop=$('#button3');
var ac=$('#button4');
var footWear=$('#button5');
var tv=$('#button6');
var cart=$('#cart');
var item;
var price=0;
var totalPrice=0;
   mobile.click(function(event){
      event.preventDefault();
      cart.removeClass('d-none');
       item=$('#newTodo1').html();
       price=$('#price1').html();
       totalPrice+=Number(price);
      $("#todos").append('<li class="display-4">'+ item+'&nbsp &nbsp'+price+ '<span class="deleteItem ml-4"><i class="fas fa-trash-alt"></i></span></li>');
      $('#totalPrice').text(totalPrice);
   });
   mTshirt.click(function(event){
      event.preventDefault();
      cart.removeClass('d-none');
       item=$('#newTodo2').html();
       price=$('#price2').html();
       totalPrice+=Number(price);
      $("#todos").append('<li class="display-4">'+ item+'&nbsp &nbsp'+price+ '<span class="deleteItem"><i class="fas fa-trash-alt"></i></span></li>');
      $('#totalPrice').text(totalPrice);
   });
   fTop.click(function(event){
      event.preventDefault();
      cart.removeClass('d-none');
       item=$('#newTodo3').html();
       price=$('#price3').html();
       totalPrice+=Number(price);
      $("#todos").append('<li class="display-4">'+ item+'&nbsp &nbsp'+price+ '<span class="deleteItem"><i class="fas fa-trash-alt"></i></span></li>');
      $('#totalPrice').text(totalPrice);
   });
   ac.click(function(event){
       event.preventDefault();
       cart.removeClass('d-none');
       item=$('#newTodo4').html();
       price=$('#price4').html();
       totalPrice+=Number(price);
      $("#todos").append('<li class="display-4">'+ item+'&nbsp &nbsp'+price+ '<span class="deleteItem"><i class="fas fa-trash-alt"></i></span></li>');
      $('#totalPrice').text(totalPrice);
   });
   footWear.click(function(event){
       event.preventDefault();
       cart.removeClass('d-none');
       item=$('#newTodo5').html();
       price=$('#price5').html();
       totalPrice+=Number(price);
      $("#todos").append('<li class="display-4">'+ item+'&nbsp &nbsp'+price+ '<span class="deleteItem"><i class="fas fa-trash-alt"></i></span></li>');
      $('#totalPrice').text(totalPrice);
   });
   tv.click(function(event){
       event.preventDefault();
       cart.removeClass('d-none');
       item=$('#newTodo6').html();
       price=$('#price6').html();
       totalPrice+=Number(price);
      $("#todos").append('<li class="display-4">'+ item+'&nbsp &nbsp'+price+ '<span class="deleteItem"><i class="fas fa-trash-alt"></i></span></li>');
      $('#totalPrice').text(totalPrice);
   });
   $("#todos").on('click','.deleteItem',deleteItem);
   function deleteItem(event){
      $(this).parent().remove();
      // totalPrice=toatalPrice-;
   }
});