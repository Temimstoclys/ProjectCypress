const marge = require('mochawesome-report-generator');
const mochawesomeMerge = require('mochawesome-merge');

mochawesomeMerge({
  files: ['./mochawesome-report/*.json']
}).then((report) => {
  marge.create(report, {
    reportDir: './mochawesome-report',
    reportFilename: 'final-report'
  });
});