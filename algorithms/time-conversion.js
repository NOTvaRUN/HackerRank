
function timeConversion(s) {
    // Write your code here
    let splitTime = s.split(':');
    let hour = parseInt(splitTime[0]);
    let minutes = splitTime[1];
    let seconds = splitTime[2].substr(0, 2)
    let timePeriod = splitTime[2].substr(2, 3)
    switch(timePeriod){
        case 'AM':
            if(hour == 12){
                hour = '00';
            } else {
                hour = hour;
            }
        break;
        case 'PM':
            if(hour == 12){
                hour = '12';
            } else {
                hour = hour + 12
            }
        break;
    }
    return `${hour.toString().padStart(2, '0')}:${minutes}:${seconds}`
}

console.log(timeConversion('07:05:45PM'));