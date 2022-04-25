function A_Manager_Config(){

    return {

        enable : function(val){
            Config[val] = true;
            
        },
        disable : function(val){
            Config[val] = false;
        },
        load : function(){
            let modulesCount = 0;
            if(Config["js-links"] == true){
                document.querySelectorAll(`[jsl=""]`).forEach(function(i){
                        i.setAttribute("href","javascript:void(0)");
                        i.removeAttribute("jsl")
                })
                modulesCount++;
                
            }
            console.warn(`AquaJS: ${modulesCount} configs is loaded`);
        }




    }


}