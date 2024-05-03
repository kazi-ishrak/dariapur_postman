const newman = require('newman');
 require ('dotenv').config();
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/34262202-0d343696-594d-463a-931d-43b4e12092d3?access_key=${process.env.accessKey}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});