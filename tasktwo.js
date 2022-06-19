 
function  contTrue(arr){
    var sum =0 
    for (var i=0; i<arr.length; i++){
        if(arr[i]=true){
            sum += arr[i]
        }
    }
    return sum-1;
}
console.log(contTrue([true, true, true, false]))