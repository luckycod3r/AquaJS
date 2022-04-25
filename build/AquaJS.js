
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

let AquaJS_SimpleConfig_Applayed_Developed_by_luckycod3r = {
"js-links" : true,
"logger" : true
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
function A_aqua_rand(min,max,...props){
return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
let Aqua_Compilied_Modal = [];


function createModals(){

}
function initModule(){
chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
let className = '';
for (var i = 0; i < 7; i++) {
var pos = Math.floor(Math.random() * chrs.length);
className += chrs.substring(pos,pos+1);
}
Utils.createClass(`.${className}-generic-aquaJS`,"background-color: red !important");
Utils.applyClass(`${className}-generic-aquaJS`,A_(".wrapper").e)
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

