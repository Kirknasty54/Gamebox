function Validation(value){
    let errors ={}
   // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(value.email === ""){
       errors.email = "Name should not be empty"
    }else if(!email_pattern.test(value.email)){
       errors.email = "Email Didn't match"
    }else{
       errors.email = ""
    }
   
    if (value.password ===""){
       errors.password = "Password should not be empty"
    }else if(!password_pattern.test(value.password)){
       errors.password = "Password didn't match"
    }else{
       errors.password = ""
    }
    return errors;

}    
export default Validation;