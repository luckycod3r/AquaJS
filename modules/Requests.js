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