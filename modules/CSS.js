function A_CSS_listen(elem,operation,value,type,...props){
    if(type  == "two"){
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
                    if(Config.logger){
                        console.error(`AquaJS: Element (${element}) is not defined`);
                    }
                    
                }

            }
        }
    }
    else if(type == "one"){
        let result = [];
        classs = value.split(",");
        for(let i in classs){
            if(elem.classList != undefined){
                
                if(operation == "remove"){
                   elem.classList.remove(classs[i]);
                }
                else if(operation == "contains"){
                   
                   result.push(elem.classList.contains(classs[i]));
                   if(value.length == 1){
                       
                       return elem.classList.contains(classs);
                   }
                   if(i == classs.length - 1){
                        if(props[0] != "ignore" && A_().config().get()["logger"]){
                            A_().log(result)
                        }
                        
                       return(result)
                   }
                   
                    
                }
                else if(operation == "add"){
                    elem.classList.add(classs[i]);
                }
            }
            else{
                if(Config.logger){
                    console.error(`AquaJS: Element (${elem}) is not defined`);
                }
                
            }

        }
    }
}