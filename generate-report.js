const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');

merge({
  files: ['./mochawesome-report/*.json']
}).then((report) => {
  return marge.create(report, {
    reportDir: './mochawesome-report',
    reportFilename: 'final-report',
    inline: true,
    charts: true,
    enableCharts: true,
    enableCode: true,
    reportTitle: '📊 Dashboard | Automated Testing Report',
    reportPageSubtitle: 'Temínstoclys Pinheiro | QA Engineer',
    reportPageTitle: 'Mochawesome Report 🚀',
    overwrite: true
  });
});
