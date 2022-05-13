const httpMocks = require('node-mocks-http');
const daysHandler = require('../controllers/days.js');

test.each([
    [2020, true, null, 200],
    [2019, false, null, 200],
    ['aaaa', null, 'year must be a number', 500],
])('input %d should return data: ' + '%s, error: ' + '%s, status code: %d', async (input, expectedData, errorMessage, statusCode) => {
    const request = httpMocks.createRequest({
        method: 'GET',
        url: '/day/is-leap-year/:year',
        params: {
            year: input,
        },
    });
    
    const response = httpMocks.createResponse();
    await daysHandler.isLeapYear(request, response);

    expect(response.statusCode).toEqual(statusCode);
    expect(response._getJSONData()).toEqual({
        result: expectedData,
        error: errorMessage
    });
});
