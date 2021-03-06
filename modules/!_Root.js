
function A_(type,...args){
    try {
    
    
    
    if(type == undefined){
        return {
            random : function(min,max) { return A_aqua_rand(min,max) },
            sort : function(array) {return A_Arrays_sort(array)},
            config : function() {
                return A_Manager_Config();
            },
            log : function(s){
                console.warn(`AquaJS: ${s}`);
            },
            init : function(){

                return A_Manager_Config().load();
                
            }


           
        }
    }

    else if(type.classList != undefined || document.querySelector(type) != undefined){
        let result = (type.classList == undefined) ? document.querySelector(type) : type;
        return result ? {
            e : result,
            html : result.innerHTML,
            classes : result.classList,
            class : function() { 
                return {
                    add : function(value){
                        return A_CSS_listen(result,"add",value,"one",args[0])
                    },
                    remove : function(value){
                        return A_CSS_listen(result,"remove",value,"one",args[0])
                    },
                    contains : function(value){
                        return A_CSS_listen(result,"contains",value,"one",args[0])
                    }
                }
            }
        } : null
    }
    else if(type == "response"){
        return A_Requests_send(args[0],args[1],args[2])
    }
    } catch (error) {
         A_().log(error)           
    }
 /*  let elem = type;
   return {
       class : function(s){
           let result = {}
           let list = elem.classList
           for(let classes in list){
            result.classes = list[classes];
           } 
           return result
       }
   }*/
}