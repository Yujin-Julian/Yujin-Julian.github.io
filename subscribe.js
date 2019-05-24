function getUrlParameter(name) { /*Get the parameters in the url bar*/
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};








$(document).ready(function(){
    var param = getUrlParameter("type");
if (param != null && param.toUpperCase()==="BASIC"){
    $(document).ready(function(){ 
    $("#basic").show()

});

}
else if(param != null && param.toUpperCase()==="STANDARD"){
$(document).ready(function(){ /*wait until webpage content is ready and after it has loaded, show the corresponding html code based on what the user has clicked previously.*/
    $("#standard").show()

});
}
else if(param != null && param.toUpperCase()==="PREMIUM"){
    $(document).ready(function(){ 
    $("#premium").show()

});
}

else{
    $(document).ready(function(){ 
    $("#regular").show()

});

}
});