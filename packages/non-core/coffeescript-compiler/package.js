Package.describe({
  name: 'coffeescript-compiler',
  summary: 'Compiler for CoffeeScript code, supporting the coffeescript package',
  // This version of NPM `coffeescript` module, with _1, _2 etc.
  // If you change this, make sure to also update ../coffeescript/package.js to match.
  version: '2.4.2'
});

Npm.depends({
  'coffeescript': '2.4.1',
  'source-map': '0.5.7'
});

Package.onUse(function (api) {
  api.use('babel-compiler');
  api.use('ecmascript');

  api.mainModule('coffeescript-compiler.js', 'server');

  api.export('CoffeeScriptCompiler', 'server');
});

// See `coffeescript` package for tests.
