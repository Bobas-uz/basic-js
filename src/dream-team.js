const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  // remove line with error and write your code here
  let teamName='';
  if (members===null||members===undefined) {
	members=[];
  	
  	return false;
  	
  }
  for (let i=0;i<members.length;i++){
  	if((typeof members[i])!=='string'){
  		continue;	
  	} 
  
  	teamName+=members[i].trim()[0];
  }



  return teamName.toUpperCase().split('').sort().join('');
};
