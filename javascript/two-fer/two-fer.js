//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
   let message = ''
  name = name.replace(/\s/g, '')
  if(name.length>0){
    message = '"One for '+ name + ',one for me.'
  }
  else{
    message = "One for you, one for me."
  }
  return message
  
};
