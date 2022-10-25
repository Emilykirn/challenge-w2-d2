// Write your code below this line.
const luckyNums = (num) => {
    let luckyArr = []
    
    while(luckyArr.length < num){
      let randomNum = Math.floor(Math.random() * 10) + 1
      
      if(luckyArr.includes(randomNum) === false){
        luckyArr.push(randomNum)
      }
      
    }
  
    return luckyArr
  }