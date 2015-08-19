///////////////////
// Reactive Dict //
///////////////////

ReactiveDict.prototype.watch = function(key, hook) {
  var instance = this;
  if (key.constructor !== String) return;
  if (hook.constructor !== Function) return;
  return Tracker.autorun(function() {
    var value = instance.get(key);
    hook.apply(this, [value]);
  });
};

ReactiveDict.prototype.watchGroup = function(keys, hook) {
  var instance = this;
  if (keys.constructor !== Array) return;
  if (hook.constructor !== Function) return;
  return Tracker.autorun(function() {
    var values = {};
    for (var i = 0; i < keys.length; i++) {
      values[keys[i]] = instance.get(keys[i]);
    }
    hook.apply(this, [values]);
  });
};

//////////////////
// Reactive Var //
//////////////////

ReactiveVar.prototype.watch = function(hook) {
  var instance = this;
  if (hook.constructor !== Function) return;
  return Tracker.autorun(function() {
    var value = instance.get();
    hook.apply(this, [value]);
  });
};
