let AquaJS_SimpleConfig_Applayed_Developed_by_luckycod3r = {
    "js-links" : true,
    "logger" : true,
    "parseProtect" : true
};
function A_Manager_Config(){
    conf = AquaJS_SimpleConfig_Applayed_Developed_by_luckycod3r;
    return {

        enable : function(val){
            AquaJS_SimpleConfig_Applayed_Developed_by_luckycod3r[val] = true;
            
        },
        disable : function(val){
            AquaJS_SimpleConfig_Applayed_Developed_by_luckycod3r[val] = false;
        },
        get : function(){
            return conf;
        },
        apply : function(cfg){
            AquaJS_SimpleConfig_Applayed_Developed_by_luckycod3r = cfg;
        },
        load : function(){
            let modulesCount = 0;
            if( conf["js-links"]!=undefined&&conf["js-links"]== true){
                document.querySelectorAll(`[jsl=""]`).forEach(function(i){
                        i.setAttribute("href","javascript:void(0)");
                        i.removeAttribute("jsl")
                })
                modulesCount++;
                
            }
            if(conf["logger"]!=undefined&&conf["logger"]== true){
                console.warn(`AquaJS: ${modulesCount} configs is loaded`);    
            }
        }




    }


}
document.addEventListener("DOMContentLoaded",() => {
    A_Manager_Config().load();
})