const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	let sample=parseFloat(sampleActivity,10);
	if((typeof sampleActivity)!=='string'||sampleActivity===''||sample<=0||sample>MODERN_ACTIVITY||isNaN(sample)) return false;
	
	let k=(0.693/HALF_LIFE_PERIOD);
	let age=(Math.ceil((Math.log(MODERN_ACTIVITY/sample))/k));

  // remove line with error and write your code here
  return age;
};
