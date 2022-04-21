function A_(type,...args){
    if(document.querySelector(type) != undefined){
        let result = document.querySelector(type);
        return result ? {
            e : result,
            html : result.innerHTML,
            classes : result.classList,

            
        } : null
    }
    else if(type == "random"){
        let min = args[0];
        let max = args[1];
        return A_aqua_rand(args[0],args[1],5);
    }
    else if(type == "sort"){
        return A_Arrays_sort(args[0],args[1]);
    }
    else if(type == "class"){
        return A_CSS_listen(args[0],args[1],args[2]);
    }
    else if(type == "response"){
        return A_Requests_send(args[0],args[1],args[2])
    }
    
}
