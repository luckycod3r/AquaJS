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
