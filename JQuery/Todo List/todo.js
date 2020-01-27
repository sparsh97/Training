$(document).ready(function(){
   $("#addItem").on('click',addItem);
   function addItem(event){
      var newItem=$('#newTodo').val();
      $("#todos").append('<li><input class="completeItem" type="checkbox">'+ newItem+ '<span class="glyphicon glyphicon-trash deleteItem" aria-hidden="true"></span></li>');
      $('#newTodo').val(""); // to remove the input area text
   }
   $("#todos").on('click','.deleteItem',deleteItem);
   function deleteItem(event){
      $(this).parent().remove()
   }
   $('#todos').on('click','.completeItem',completeItem);
   function completeItem(){
      $(this).parent().toggleClass('done');
   }
})