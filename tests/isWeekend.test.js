const httpMocks = require('node-mocks-http');
const daysHandler = require('../controllers/days.js');

test.each([
    ["2022-05-14", true, null, 200],
    ["2022-05-13", false, null, 200],
    ["05-13-2022", false, null, 200],
    ["05-14-2022", true, null, 200],
    ["20-20-2000", null, 'invalid date', 500],
    ["2-2-2000", null, 'invalid date format should be mm-dd-yyyy or yyyy-mm-dd', 500],
])('date format : "mm-dd-yyyy" or "yyyy-mm-dd" and input %s should return data: ' + '%s, error: ' + '%s, status code: %d', async (input, expectedData, errorMessage, statusCode) => {
    const request = httpMocks.createRequest({
        method: 'GET',
        url: '/day/is-weekend/:date',
        params: {
            date: input,
        },
    });
    const response = httpMocks.createResponse();
    await daysHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(statusCode);
    expect(response._getJSONData()).toEqual({
        result: expectedData,
        error: errorMessage
    });
});
