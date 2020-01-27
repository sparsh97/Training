var arr=[1,6,8,4,5];
var i,temp;
var b=arr[0];
for(i=0;i<5;i++){
    if(arr[i]>b){
        b=arr[i];
    }
}
console.log(b);

switch(true){
    case arr[0]>arr[1] && arr[0]>arr[2] && arr[0]>arr[3] && arr[0]>arr[4]:
    arr[0];
    
    break;
    case arr[1]>arr[2] && arr[1]>arr[3] && arr[1]>arr[4]:
        arr[1];
    
    break;
    case arr[2]>arr[3] && arr[2]>arr[4]:
       arr[2];
     break;
    case arr[3]>arr[4]:
        arr[3];
        break;
    default:arr[4];
     break;
}
8


if(arr[0]>arr[1] && arr[0]>arr[2] && arr[0]>arr[3] && arr[0]>arr[4]){
    console.log(arr[0]);
}
else if(arr[1]>arr[2] && arr[1]>arr[3] && arr[1]>arr[4]){
    console.log(arr[1]);
}
else if(arr[2]>arr[3] && arr[2]>arr[4]){
    console.log(arr[2]);
}
else if(arr[3]>arr[4]){
    console.log(arr[3]);
}
else{
    console.log(arr[4]);
}