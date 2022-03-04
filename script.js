function submitForm(){
    alert("submit succesful");
    }
    function fuctionDay(){
        const inpDay=document.getElementById("id");
        if(!inpDay.checkValidity()) {
            document.getElementById("demo").innerHTML=inpDay.validationMessage;
        }
        else{
            document.getElementById("demo").innerHTML=InputAccepted; 
        }
    }