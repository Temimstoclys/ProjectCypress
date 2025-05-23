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
    reportTitle: '🚀 Relatório de Testes Automatizados - Temínstoclys QA',
    reportPageTitle: 'Mochawesome Report 🚀',
    overwrite: true
  });
});
