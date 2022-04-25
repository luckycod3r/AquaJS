let Config = {
"js-links" : false,
"customConsole" : true
}
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
console.log(s);
document.querySelector("[aqua-console='']").innerHTML += s.toString();
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
class : function(operation, value) {return A_CSS_listen(result.e,operation,value)}
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
function A_aqua_rand(min,max,...props){
return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
function A_Requests_send(method,url,data,listener){
let form_data = new FormData();
if(method.toString() == "POST"){
for(let value in data){
form_data.append(data, data[value]);
}

}

var xhttp = new XMLHttpRequest();
xhttp.open(method.toString(), url.toString, true);
xhttp.onload = function(event) {

}

xhttp.send();
}
