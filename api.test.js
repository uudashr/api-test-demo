const test = require('tape');
const axios = require('axios').create({
    baseURL: 'https://httpbin.org'
});

test('HTTP Get', async (t) => {
    const res = await axios.get(`/get`, {
        headers: {'Accept': 'application/json'}
    });

    t.equal(res.status, 200, 'Status code OK');
    t.match(res.headers['content-type'], /json/, 'Content-Type is application/json');
});

test('HTTP Methods (nested)', (t) => {

    t.test('Get', async (t) => {
        const res = await axios.get('/get', {
            headers: {'Accept': 'application/json'}
        });

        t.equal(res.status, 200, 'Status code OK');
        t.match(res.headers['content-type'], /json/, 'Content-Type is application/json');
    });

    t.test('Post', async (t) => {
        const res = await axios.post('/post', {
            headers: {'Accept': 'application/json'}
        });

        t.equal(res.status, 200, 'Status code OK');
        t.match(res.headers['content-type'], /json/, 'Content-Type is application/json');
    });

    t.test('Put', async (t) => {
        const res = await axios.put('/put', {
            headers: {'Accept': 'application/json'}
        });

        t.equal(res.status, 200, 'Status code OK');
        t.match(res.headers['content-type'], /json/, 'Content-Type is application/json');
    });

    t.test('Delete', async (t) => {
        const res = await axios.delete('/delete', {
            headers: {'Accept': 'application/json'}
        });

        t.equal(res.status, 200, 'Status code OK');
        t.match(res.headers['content-type'], /json/, 'Content-Type is application/json');
    });
    
});

test('HTTP Methods (nested-loop/dynamic test cases)', (t) => {
    const testCases = [
        { name: 'Get', method: 'GET', url: '/get', expectStatus: 200 },
        { name: 'Post', method: 'POST', url: '/post', expectStatus: 200 }
    ];

    testCases.forEach((tc) => {
        t.test(tc.name, async (t) => {
            const res = await axios.request({
                method: tc.method,
                url: tc.url,
                headers: {'Accept': 'application/json'}
            });
    
            t.equal(res.status, tc.expectStatus, `Status code is ${tc.expectStatus}`);
            t.match(res.headers['content-type'], /json/, 'Content-Type is application/json');
        });
    });

});