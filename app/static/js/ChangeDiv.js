function GetRadiovalue()
{
    var man = document.getElementById("div-manually");
    var xl = document.getElementById("div-xls");
    var RadioOpt = document.getElementsByName('option');
    var radioval;
    for(var i = 0; i < RadioOpt.length; i++){
        if(RadioOpt[i].checked){
            radioval = RadioOpt[i].value;
        }
    }
    console.log(radioval);
    if(radioval == "manually")
    {
        xl.style = "display:none";
        man.style = "display:block;color:#2f3542";
    }
    else if(radioval == "xls")
    {
        man.style = "display:none";
        xl.style = "display:block";
    }
}