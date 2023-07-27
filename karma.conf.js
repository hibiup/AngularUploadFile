// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-firefox-launcher'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '.coverage/report'),
      reports:['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporter: ['progress', 'kjhtml'],
    port: 9876,
    color: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers:['Firefox', 'FirefoxHeadless' , 'Chrome'],
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: [
          '-headless'
        ],
      },
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
