{"changed":true,"filter":false,"title":"Object.js","tooltip":"/directives/es6/Object.js","value":"console.log(Object.is( -0 , 0)) //false\n\n\nconsole.log(Object.is( NaN , NaN)) //true\n\nOdject.assign(TargetObject, sourceObject) // copies functions to target\n\n\n\ndescribe('property initializer shorthand', function() {\n    it('should create properties ' +\n      'from local variables', function() {\n      var model = 'Ford';\n      var year = 1969;\n\n      var Classic = {\n        model,\n        year\n      } \n\n      expect(Classic.model).toBe('Ford');\n      expect(Classic.year).toBe(1969);   \n    });\n  });\n  \n    describe('method initializer shorthand', function() {\n    it('should create methods using shorthand', function() {\n      var server = {\n        getPort() {\n          return 8000;\n        }\n      }\n\n      expect(server.getPort()).toBe(8000);\n    });\n  });\n  \n  \n   describe('computed property names', function () {\n    it('should support variables for '\n      + 'property names', function () {\n\n      function createSimpleObject(propName, propVal) {\n        return {\n          [propName]:propVal\n        }\n      }\n\n      var simpleObj = createSimpleObject('color', 'red');\n      expect(simpleObj.color).toBe('red');\n    });\n\n    it('should support concatenation', function() {\n      function createTriumvirate(first, second, third) {\n        return {\n          ['member_' + first.name]:first,\n          ['member_' + second.name]:second,\n          ['member_' + third.name]:third\n        }\n      }\n\n      var Joe = {name: 'Joe'}\n      var Ralph = {name: 'Ralph'}\n      var Harry = {name: 'Harry'}\n\n      var tri = createTriumvirate(Joe, Ralph, Harry);\n      expect(tri.member_Joe).toBe(Joe);\n    })\n  })\n  ","undoManager":{"mark":2,"position":11,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["console.log(Object.is( -0 , 0)) //false","","","console.log(Object.is( NaN , NaN)) //true","","Odject.assign(TargetObject, sourceObject) // copies functions to target","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":23,"column":5},"action":"insert","lines":["describe('property initializer shorthand', function() {","    it('should create properties ' +","      'from local variables', function() {","      var model = 'Ford';","      var year = 1969;","","      var Classic = {","        model,","        year","      } ","","      expect(Classic.model).toBe('Ford');","      expect(Classic.year).toBe(1969);   ","    });","  });"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":5},"end":{"row":24,"column":0},"action":"insert","lines":["",""]},{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":2},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":2},"end":{"row":35,"column":5},"action":"insert","lines":["  describe('method initializer shorthand', function() {","    it('should create methods using shorthand', function() {","      var server = {","        getPort() {","          return 8000;","        }","      }","","      expect(server.getPort()).toBe(8000);","    });","  });"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":5},"end":{"row":36,"column":0},"action":"insert","lines":["",""]},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":2},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":2},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":2},"end":{"row":38,"column":0},"action":"insert","lines":["",""]},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":2},"end":{"row":68,"column":4},"action":"insert","lines":[" describe('computed property names', function () {","    it('should support variables for '","      + 'property names', function () {","","      function createSimpleObject(propName, propVal) {","        return {","          [propName]:propVal","        }","      }","","      var simpleObj = createSimpleObject('color', 'red');","      expect(simpleObj.color).toBe('red');","    });","","    it('should support concatenation', function() {","      function createTriumvirate(first, second, third) {","        return {","          ['member_' + first.name]:first,","          ['member_' + second.name]:second,","          ['member_' + third.name]:third","        }","      }","","      var Joe = {name: 'Joe'}","      var Ralph = {name: 'Ralph'}","      var Harry = {name: 'Harry'}","","      var tri = createTriumvirate(Joe, Ralph, Harry);","      expect(tri.member_Joe).toBe(Joe);","    })","  })"]}]}]]},"ace":{"folds":[],"scrolltop":801,"scrollleft":0,"selection":{"start":{"row":55,"column":20},"end":{"row":55,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":43,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424261036028}