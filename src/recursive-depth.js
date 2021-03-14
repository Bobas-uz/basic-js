const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	
  calculateDepth(arr) {
 	   
    let depth=0;
    let item=0;

    if (Array.isArray(arr)){
    	for (let i=0;i<arr.length;i++){
    		item=this.calculateDepth(arr[i]);
    		if(item>depth){
    			depth=item;
    		}
    	}
    	return depth+1;
    } else return 0;
    }
     
};