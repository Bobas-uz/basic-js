const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  // remove line with error and write your code here
  
 
  if(options.separator===undefined){
  	options.separator='+';
  }
  if(options.additionSeparator===undefined){
  	options.additionSeparator='|';
  }
  	
  if(options.additionRepeatTimes===undefined){
  	options.additionRepeatTimes=0;
  }
  if(options.addition===undefined){
  	options.addition='';
  }
  let string=str;
  let add=options.addition;
  

  for(let j=0;j<options.additionRepeatTimes-1;j++){
  		add+=options.additionSeparator+options.addition;
  	}
	string+=add;
  for(let i=0;i<options.repeatTimes-1;i++){
  	string+=options.separator+str+add;
  	
  	
  }

  return string;
};
  