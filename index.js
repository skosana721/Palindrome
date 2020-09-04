const palindrome =(str)=> {
  let regex = /[^A-Za-z0-9]/gi;
  let newStr = str.toLowerCase().replace(regex, '')
  let strLength = newStr.length
  for(var i = 0; i< strLength; i++){
      if(newStr[i] !== newStr[strLength-1-i]){
          return false;
      }
  }
  return true ;
}
console.log(palindrome('RaceCar'));