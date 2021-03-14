const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(arguments.length===0){
    return 'Unable to determine the time of year!';
  }
     let month = date.getUTCMonth();
  if (Object.prototype.toString.call(date)!=='[object Date]') {
    return 'Unable to determine the time of year!';
  }
  if (!date instanceof Date|| (isNaN(date))) {
      throw new Error();
  }
  if ([0,1,11].includes(month)) {
    return 'winter';
  }
  if ([2,3,4].includes(month)) {
    return 'spring';
  }
  if ([5,6,7].includes(month)) {
    return 'summer';
  }

  if ([8,9,10].includes(month)) {
    return 'fall';
  }

};


