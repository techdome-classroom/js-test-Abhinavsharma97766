
  const decodeTheRing = function (s, p) {
    
    function prons(s, p) {
      let sIdx = 0,
        pIdx = 0;
      let starIdx = -1,
        sTmpIdx = -1;
  
      while (sIdx < s.length) {
        if (pIdx < p.length && (p[pIdx] === "?" || p[pIdx] === s[sIdx])) {
         
          sIdx++;
          pIdx++;
        } else if (pIdx < p.length && p[pIdx] === "*") {
          
          starIdx = pIdx;
          sTmpIdx = sIdx;
          pIdx++;
        } else if (starIdx === -1) {
          
          return false;
        } else {
          
          pIdx = starIdx + 1;
          sIdx = sTmpIdx + 1;
          sTmpIdx = sIdx;
        }
      }
  
      
      while (pIdx < p.length && p[pIdx] === "*") {
        pIdx++;
      }
  
      return pIdx === p.length;
    }
  
    return prons(s, p);
  };
  
  module.exports = decodeTheRing;