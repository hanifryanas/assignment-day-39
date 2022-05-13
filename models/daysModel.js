class daysServiceModel {

    static isWeekend(date) {
        return new Promise((resolve, reject) => {
            if(!date) {
                reject('invalid date');
            }
            else {
            const day = new Date(date).getDay();
            console.log(day);
            if(day%1 !== 0) {
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