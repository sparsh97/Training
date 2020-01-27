$(dosument).rady(function(){
   $('#addItem').on('click',completeItem);
   $('#todos').on('change','.completeItem',completeItem);
   $('#todos').on('click', '.deleteItem', deleteItem);

   function addItem(event){
      var newItem=$("#newTodo").val();
      $('#todos').append('<li><input class="complet')
   }
})