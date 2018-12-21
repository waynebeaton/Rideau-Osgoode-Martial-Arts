var validateProfile = function(){
    valid = true;
    if (document.contact.name.value === "") {
     document.getElementById('namealert').innerHTML="*Please enter a name*";
        valid = false;
    }
    if (document.contact.email.value === "") {
     document.getElementById('emailalert').innerHTML="*Please enter a valid email address*";
        valid = false;
    }
    if (document.contact.phone.value === "") {
     document.getElementById('phonealert').innerHTML="*Please enter a company*";
        valid = false;
    }
    if (document.contact.message.value === "") {
     document.getElementById('messagealert').innerHTML="*Please enter some details*";
        valid = false;
    }
    if(valid){
        
     document.getElementById("form").action = "https://formspree.io/wayne@rokc.ca";
     document.getElementById("form").method = "POST";
        valid = true;
    }

    return valid;
}