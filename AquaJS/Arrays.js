// Sort
// FindPos


function A_Arrays_sort(array,type = "desc"){

    if(type.toLowerCase() == "desc"){
        return array.sort(function(a,b){
            return a-b;
        });
    }
    else if(type.toLowerCase() == "asc"){
        return array.sort(function(a,b){
            return a+b;
        });
    }



}