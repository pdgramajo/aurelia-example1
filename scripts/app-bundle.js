define('app',['exports', 'aurelia-fetch-client', '../node_modules/datatables.net/js/jquery.dataTables'], function (exports, _aureliaFetchClient, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      var _this = this;

      _classCallCheck(this, App);

      this.message = 'Hello World!';
      var httpClient = new _aureliaFetchClient.HttpClient();
      var xx = httpClient.fetch('http://localhost:54445/api/People').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.mydata = data.people;
      });
      xx.then(function () {});
    }

    App.prototype.createDT = function createDT() {
      $('#table').dataTable({
        "paginate": true
      });
    };

    App.prototype.attached = function attached() {};

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-bootstrap').globalResources('bootstrap/css/bootstrap.css').feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('components/custom-component',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CustomComponent = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var CustomComponent = exports.CustomComponent = (_class = function CustomComponent() {
        _classCallCheck(this, CustomComponent);

        _initDefineProp(this, "data", _descriptor, this);

        console.log('+++ ', this.data);
    }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class);
});
define('components/login-component',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var LoginComponent = exports.LoginComponent = function () {
      function LoginComponent() {
         _classCallCheck(this, LoginComponent);

         this.Message = 'Login';
      }

      LoginComponent.prototype.created = function created(owningView, myView) {};

      LoginComponent.prototype.bind = function bind(bindingContext, overrideContext) {};

      LoginComponent.prototype.attached = function attached(argument) {};

      LoginComponent.prototype.detached = function detached(argument) {};

      LoginComponent.prototype.unbind = function unbind(argument) {};

      return LoginComponent;
   }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('components/customComponent',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CustomComponent = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var CustomComponent = exports.CustomComponent = (_class = function CustomComponent() {
        _classCallCheck(this, CustomComponent);

        _initDefineProp(this, "data", _descriptor, this);

        console.log('+++ ', this.data);
    }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return new Object();
        }
    })), _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><require from=\"./components/customComponent\"></require><table id=\"table\" class=\"display\" cellspacing=\"0\" width=\"100%\"><thead><tr><td>Id</td><td>FirstName</td><td>LastName</td><td>UserName</td></tr></thead><tbody><tr repeat.for=\"person of mydata \"><custom-component data.bind=\"person\"></custom-component></tr></tbody></table></template>"; });
define('text!components/custom-component.html', ['module'], function(module) { module.exports = "<template><h1>${data.Id}</h1></template>"; });
define('text!components/login-component.html', ['module'], function(module) { module.exports = "<template><form action=\"\" method=\"POST\" class=\"form-horizontal\" role=\"form\"><input type=\"text\" name=\"user\" placeholder=\"Username\"> <input type=\"password\" name=\"pass\" placeholder=\"Password\"> <input type=\"submit\" name=\"login\" class=\"login loginmodal-submit\" value=\"Login\"></form></template>"; });
define('text!components/customComponent.html', ['module'], function(module) { module.exports = "<template><h1>${data.Id}</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map