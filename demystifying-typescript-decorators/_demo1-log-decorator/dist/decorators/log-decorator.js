"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//target: constructor function prototype of the class
//string: name of the thing we are decoratingm. In this case the function name.
//descriptor:
function log(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        //before
        console.log(key + " method called with args: " + JSON.stringify(args));
        var result = originalMethod.apply(this, args);
        // after
        console.log(key + " method return value: " + JSON.stringify(result));
    };
    return descriptor;
}
exports.default = log;
