const CustomError = require("../extensions/custom-error");
let link=[];
const chainMaker = {
  getLength() {
    return link.length;  
  
  },
  addLink(value) {
    if(value=== undefined){
      value=''+value;
      link.push(' ');
      return chainMaker;
    }
    link.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (position<0||position>=link.length||isNaN(position)){
      link=[];
      throw Error();
    }
    link.splice(position-1,1);
    return chainMaker;
  },
  reverseChain() {
    link.reverse();
    return chainMaker;
    
  },
  finishChain() {
    let result='';
    for (let i=0;i<link.length;i++){
      link[i]='( '+link[i]+' )';
      if(i!==link.length-1){
        link[i]=link[i]+'~~';
      }
    }
   result=link.join('');
   link=[];
   return result;
  }
};

module.exports = chainMaker;
