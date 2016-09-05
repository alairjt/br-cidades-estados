exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/cidades-estados.spec.protractor.js'],
    baseUrl: 'http://localhost:8000'
};