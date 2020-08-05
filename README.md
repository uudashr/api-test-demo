# API Test Demo

This will show you how to do API Test using Node JS.
The API will be tested is https://httpbin.org.

## Steps

### 1. Create the project

```
mkdir api-test-demo
cd api-test-demo
npm init -y
```

### 2. Add the dependencies

```
npm install tape axios --save-dev
```

This will install `tape` test framework and `axios` for http client.

### 3. Write test code

```javascript
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

// the rest can be seen on the source code
```

### 4. Run the test

```
node api.test.js
```

### 5. Run using npm

Edit `package.json`
```json
{
    // ...
    "scripts": {
        "test": "tape *.test.js"
    },
    // ...
}
```
This will run all the files with pattern suffix `".test.js"`

Run from command line
```
npm test
```

## Reference
1. Test Anything Protocol https://testanything.org/
2. tape https://github.com/substack/tape
3. axios https://github.com/axios/axios