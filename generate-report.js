const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');

merge({
  files: ['./mochawesome-report/*.json']
}).then((report) => {
  return marge.create(report, {
    reportDir: './mochawesome-report',
    reportFilename: 'final-report'
  });
});
