function formValidation() {
    let Username =document.getElementById(`Firstname`); 
    let Lastname =document.getElementById(`Lastname`);
    let Email =document.getElementById(`Email`);
    let Password =document.getElementById(`Password`);


    if(Firstname.value.trim()===null || Firstname.value.trim()===""  ){
        alert("Enter valid FirstName");
        return false;

    }   
     if(Lastname.value.trim()===null || Lastname.value.trim()===""  ){
        alert('Please enter Lastname');
        return false;
    }     
    

    if(Email.value.trim()===null || Email.value.trim()===""  ){
        alert("Enter valid Email");
        return false; 

    }   

    if(Password.value.trim()===null || Password.value.trim()===""  ){
        alert("Enter valid Password");
        return false;
     
     }

    }

