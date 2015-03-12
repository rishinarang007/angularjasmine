{"filter":false,"title":"weaksetandMap.js","tooltip":"/directives/es6/weaksetandMap.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":76,"column":2},"action":"insert","lines":["describe('WeakSets', function() {","\tit('should not have properties & methods that relate to the entire set', function () {","    var set = new WeakSet();","    expect(set.size).toBe(undefined);","    expect(set.entries).toBe(undefined);","    expect(set.values).toBe(undefined);","    expect(set.forEach).toBe(undefined);","  });","","  it('should be able to find items with has', function() {","    var set = new WeakSet();","    var item = {name:'Joe'};","    set.add(item);","    expect(set.has(item)).toBe(true);","  });","","  it('should be able to remove items with delete', function() {","    var set = new WeakSet();","    var item = {name:'Joe'};","    set.add(item);","    set.delete(item);","    expect(set.has(item)).toBe(false);","  });","","  it('should remove all items when clear is called', function() {","    var set = new WeakSet();","    var item = {name:'Joe'};","    set.add(item);","    set.clear();","    expect(set.has(item)).toBe(false);","  });","});","","describe('WeakMaps', function() {","\tit('should not have properties & methods that relate to the entire set', function () {","    var map = new WeakMap();","","    expect(map.size).toBe(undefined);","    expect(map.entries).toBe(undefined);","    expect(map.keys).toBe(undefined);","    expect(map.values).toBe(undefined);","    expect(map.forEach).toBe(undefined);","  });","","  it('should be able to determine existince of items with has', function() {","    var map = new WeakMap();","    var key = {};","    map.set(key, 'a');","    expect(map.has(key)).toBe(true);","  });","","  it('should be able to get the correct value', function() {","    var map = new WeakMap();","    var key = {};","    map.set(key, 'a');","    expect(map.get(key)).toBe('a');","  });","","  it('should be able to remove items with delete', function() {","    var map = new WeakMap();","    var key = {};","    map.set(key, 'a');","    map.delete(key);","    expect(map.has(key)).toBe(false);","  });","","  it('should remove all items when clear is called', function() {","    var map = new WeakMap();","    var key = {};","    map.set(key, 'a');","    var key2 = {};","    map.set(key2, 'b');","    map.clear();","    expect(map.has(key)).toBe(false);","    expect(map.has(key2)).toBe(false);","  });","})"]}]}]]},"ace":{"folds":[],"scrolltop":604,"scrollleft":0,"selection":{"start":{"row":76,"column":2},"end":{"row":76,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":72,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424168804104,"hash":"9e0a2105ef6ec31223c18ad5ac174b5833fac422"}