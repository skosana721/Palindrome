
    const validate =(str)=>{
      
     
      let regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
     
      
      if (regex.test(str)) {
          return true;
          }else{
            return false;
        }
  }
  console.log(validate("011282111"))