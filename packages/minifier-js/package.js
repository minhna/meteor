Package.describe({
  summary: "JavaScript minifier",
  version: "2.7.4"
});

Npm.depends({
  terser: "5.12.1"
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.use('babel-compiler');
  api.mainModule('minifier.js', 'server');
  api.export('meteorJsMinify');
  api.export('meteorJsMinifyAsync');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('minifier-js');
  api.mainModule('minifier-tests.js', 'server');
});
