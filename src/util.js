function daysLeftInYear() {
    const currentDate = new Date()
    var numMon = 0
    var numDaysInMonth = getDaysInMonth(currentDate.getDate(),currentDate.getFullYear())
    for (let i = currentDate.getDate(); i < numDaysInMonth+1; i++) {
      if ([1,2,3,4,5].indexOf(currentDate.getDay()) > -1 ){
        numMon++
      }
      currentDate.setDate(currentDate.getDate()+1);
    }
    console.log(numMon)
    return numMon;
}

function getDaysInMonth(month,year) {
 return new Date(year, month, 0).getDate();
};

module.exports = {
  daysLeftInYear
}