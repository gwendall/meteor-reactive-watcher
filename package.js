Package.describe({
  name: 'gwendall:reactive-watcher',
  summary: 'Watch changes of specific reactive variables',
  git: 'https://github.com/gwendall/meteor-reactive-watcher.git',
  version: '0.1.0'
});

Package.onUse(function (api, where) {

  api.use([
    'tracker',
    'reactive-var',
    'reactive-dict'
  ], 'client');

  api.addFiles([
    'lib.js',
  ], 'client');

});
