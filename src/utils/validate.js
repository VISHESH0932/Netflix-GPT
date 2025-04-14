

const validate = (email,password) => {
   const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password); 

   if(!isEmailValid){
      return "Please enter a valid email address.";
   }
    if(!isPasswordValid){
        return   "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    return null;
};

export default validate
