function A_CSS_listen(elem,operation,value){
    console.log(elem + "_" + operation + "_" + value)
    if(typeof elem == "string"){
        elem = [elem];
    }
    for(let index in elem){
        let classs;
        let element = null;
        if(document.querySelector(elem[index].toString().replace(" ","")) == undefined){
            element = elem[index];
            if(elem[index] == undefined){
                return undefined;
            }
        }
        else{
            element = document.querySelector(elem[index]);
        }
        classs = value.split(",");
        let result = []
        for(let i in classs){
            if(element.classList != undefined){
                
                if(operation == "remove"){
                    element.classList.remove(classs[i]);
                }
                else if(operation == "contains"){
                    result.push(element.classList.contains(classs[i]));
                    if(value.length == 1){
                        return element.classList.contains(classs);
                    }
                    if(i == classs.length - 1) return(result);
                    
                }
                else if(operation == "add"){
                    element.classList.add(classs[i]);
                }
            }
            else{
                console.error("AquaJS: Element is not defined");
            }

        }
    }
}