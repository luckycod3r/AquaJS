let Utils = {
        createClass : function (name,rules){
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        if(!(style.sheet||{}).insertRule) 
            (style.styleSheet || style.sheet).addRule(name, rules);
        else
            style.sheet.insertRule(name+"{"+rules+"}",0);
    },
    applyClass :function (name,element,doRemove){
        if(typeof element.valueOf() == "string"){
            element = document.getElementById(element);
        }
        if(!element) return;
        if(doRemove){
            element.className = element.className.replace(new RegExp("\\b"+name+"\\b","g"),"");
        }else{
            element.className = element.className + " "+name;
        }
    }
}

