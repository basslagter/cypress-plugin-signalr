"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscribers_1 = require("./subscribers");
var invokes_1 = require("./invokes");
var SignalRMock = /** @class */ (function () {
    function SignalRMock() {
    }
    SignalRMock.prototype.on = function (action, callback) {
        subscribers_1.subscribers.push({
            action: action,
            callback: callback,
        });
    };
    SignalRMock.prototype.invoke = function (action) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        invokes_1.invokes.push({
            action: action,
            args: args,
        });
    };
    SignalRMock.prototype.onclose = function () {
        return;
    };
    return SignalRMock;
}());
exports.SignalRMock = SignalRMock;
