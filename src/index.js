module.exports = function reverse (n) {
    function revolution(n) {
        let strN = String(n);   
        let newArr = strN.split('')
        let strRev =newArr.reverse().join('')
            return strRev
      }
      
    if (n > 0) {    
      return revolution(n)
      }else {
      n = n * -1
      return revolution(n)
      } 
}
