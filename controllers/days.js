const daysServiceModel = require('../models/daysModel.js');

class controllerDays {
    static async isWeekend (req, res) {
        const date = req.params.date;
        await daysServiceModel.isWeekend(date)
            .then(result => {
                res.status(200).json({
                    result: result,
                    error: null 
                });
            })
            .catch(err => {
               res.status(500).json({
                    result: null,
                    error: err
                });
            })
            .finally(() => {
                res.end();
            });
    }

    static async isLeapYear(req, res) {
        const year = req.params.year;
        await daysServiceModel.isLeapYear(year)
            .then(result => {
                res.status(200).json({
                    result: result,
                    error: null
                });
            })
            .catch(err => {
                res.status(500).json({
                    result: null,
                    error: err
                });
            })
            .finally(() => {
                res.end();
            });
    }
}

module.exports = controllerDays;