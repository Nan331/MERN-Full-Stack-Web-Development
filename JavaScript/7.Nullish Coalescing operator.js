/*Nullish operator: This operator returns the right hand value if the left hand is null or undefined*/

function call(item){
    var sell = item ?? 7;
    console.log(sell);
    
}

call();
call(77)