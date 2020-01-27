var markMass=59;
var markHeight=169;
var johnMass=56;
var johnHeight=165;
var BMI=function (mass,height){
    return (mass/(height*height));
}
bool=Boolean(BMI(markMass,markHeight)>BMI(johnMass,johnHeight));
if(BMI(markMass,markHeight)>BMI(johnMass,johnHeight)){
    
    console.log("Is Marks BMI is greater than John's?"+' '+bool);
}
else{
     console.log("Is Marks BMI is greater than John's?"+' '+bool);
}

VM4857:11 Is Marks BMI is greater than John's? true