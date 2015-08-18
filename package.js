Package.describe({
  name: 'gwendall:reactive-watcher',
  summary: 'Watch changes of specific reactive variables',
  git: 'https://github.com/gwendall/meteor-reactive-watcher.git',
  version: '0.1.0'
});

Package.onUse(function (api, where) {

  api.use([
    'tracker@1.0.7',
    'reactive-dict@1.1.0',
    'reactive-var@1.0.5'
  ], 'client');

  api.addFiles([
    'lib.js',
  ], 'client');

});
