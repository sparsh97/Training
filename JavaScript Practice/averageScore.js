var johnScore=[89,120,103];
var markScore=[116,94,123];
var maryScore=[97,134,105];
var avg; var sum=0;
johnScore.forEach(average);
function average(item){
    for(var i=0;i<3;i++){
        sum=sum+item;
    }
    avg=sum/3;
 }
var x=avg;
sum=0;
markScore.forEach(average);
var y=avg;
sum=0;
maryScore.forEach(average);
var z=avg;
if(x>y && x>z){
    console.log("Mark's team wins with score"+' '+x);
}
else if(y>x && y>z){
    console.log("John's team wins with score"+' '+y);
}
else if(z>x && z>y){
    console.log("Mary's team wins with score"+' '+z);
}
else{
    console.log("There is a tie");
}