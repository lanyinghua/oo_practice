/**
 * Created by huadu on 7/17/17*/
//A 30-min-practice
 //16 -->  1,2,4,8,16

 function firstFactor(num) {
    var firstFactor=0;
     for (var factor =2;factor<=num;factor++){
        if (num%factor===0){
            var firstFactor=factor;
            break;
        }else{continue};
    }
    return firstFactor;
}

console.log(firstFactor(16))

function alltheFactors(num) {
    var allFactors =[];
    var firstofEachRemain= 0;
     for{
        if (num%firstofEachRemain===0){
            var firstofEachRemain = firstFactor(num)
            num = num/firstofEachRemain;//remain
            allFactors.push(firstofEachRemain)
    }else{
            continue
    }
    }
}