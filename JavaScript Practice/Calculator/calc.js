var list=document.querySelector("#list");
var html='';
var a=prompt("Enter first number ");
var b=prompt("Enter Second number ");
var operation=prompt("Enter the operation ");
var result=0;
switch(operation){
   case '+': result=Number(a)+Number(b);
         html+=`<li>Addition of number is: ${result}<li>`;
         list.innerHTML=html;
         break;
   case '-': result=a-b;
         html+=`<li>Subtraction of number is: ${result}<li>`;
         list.innerHTML=html;
         break
   case '*': result=a*b;
         html+=`<li>Multiplication of number is: ${result}<li>`;
         list.innerHTML=html;
         
   case '/': result=a/b;
         html+=`<li>Divide of number is: ${result}<li>`;
         list.innerHTML=html;
         
   default : html+=`<li>Result is ${result} wrong input please try again by refreshing the page :)<li>`;
             list.innerHTML=html;
               // console.log("wrong input");
}