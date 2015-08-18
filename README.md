Meteor Session watch
=================

Adds watch methods to reactive variables. Works with ReactiveVar, ReactiveDict - and by extension Session variables.  
Inspired by Angular's $watch function.


Installation
------------

``` sh
meteor add gwendall:reactive-watcher
```

Methods
----------

### Reactive Var methods
**watch(callback)**  
Watch changes of a single variable.  

### Reactive Dict methods
**watch(key, callback)**  
Watch changes of a single variable.  

**watchGroup(keys, callback)**  
Watch changes of any variables in a set.  

Those functions return a Tracker instance. To stop watching, just call the ```stop()``` method on the returned object.

Example
-------

``` javascript
Template.foo.onCreated(function() {

  /////////////////////////////////
  // 1. With a ReactiveVar variable
  /////////////////////////////////

  var reactiveVar = new ReactiveVar(null);
  this.reactiveVarWatcher = reactiveVar.watch(function(value) {
    console.log('The value of 'name' changed! It is now: ' + value);
  });

  //////////////////////////////////
  // 2. With a ReactiveDict variable
  //////////////////////////////////

  var reactiveDict = new ReactiveDict(null);
  this.reactiveDictWatcher = reactiveDict.watch('name', function(value) {
    console.log('The value of 'name' changed! It is now: ' + value);
  });
  this.reactiveDictGroupWatcher = reactiveDict.watchGroup(['name', 'age'], function(values) {
    console.log('The value of either 'name' or 'age' changed! Their new values are now the following.');
    for (var key in values) {
      console.log(key + ': ' + values[k]);
    }
  });

  /////////////////////////////
  // 3. With a Session variable
  /////////////////////////////

  this.sessionWatcher = Session.watch('name', function(value) {
    console.log('The value of 'name' changed! It is now: ' + value);
  });
  this.sessionGroupWatcher = Session.watchGroup(['name', 'age'], function(values) {
    console.log('The value of either 'name' or 'age' changed! Their new values are now the following.');
    for (var key in values) {
      console.log(key + ': ' + values[k]);
    }
  });

});

Template.foo.onDestroyed(function() {
  this.reactiveVarWatcher.stop();
  this.reactiveDictWatcher.stop();
  this.reactiveDictGroupWatcher.stop();
  this.sessionWatcher.stop();
  this.sessionGroupWatcher.stop();
});
```
