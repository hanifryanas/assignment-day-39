class daysServiceModel {

    static isWeekend(date) {
        return new Promise((resolve, reject) => {
            if(date.length !== 10) {
                reject('invalid date format should be mm-dd-yyyy or yyyy-mm-dd');
            }
            else {
            const day = new Date(date).getDay();
            console.log(day);
            if(day%1 !== 0) {
                console.log('day must be a number');
                reject('invalid date');
            }
            else {
            (day === 0 || day === 6) ? resolve(true) : resolve(false);
            }
        }
        })
    }

    static isLeapYear(year) {
        return new Promise((resolve, reject) => {
            console.log(year);
            console.log(parseInt(year));
            if(parseInt(year)%1 !== 0) {
                reject('year must be a number');
            }
            else {
            (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? resolve(true) : resolve(false);
            }
        })
    }
}

module.exports = daysServiceModel;