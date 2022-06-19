

function zeroEnd(num){
    var arr =[ ];
    for(var i=0; i < num.length; i++){
        if(num[i]==0 ){
            arr.push(num[i])
        } else{
            arr.unshift(num[i])
        }
    }
    return arr;
}
console.log(zeroEnd([1, 6, 8, 0, 6, 0]))