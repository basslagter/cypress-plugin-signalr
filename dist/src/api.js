"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.verify = exports.publish = void 0;
var invokes_1 = require("./invokes");
var subscribers_1 = require("./subscribers");
function publish(action) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    subscribers_1.getSubscribers()
        .filter(function (s) { return s.action === action; })
        .forEach(function (s) { return s.callback.apply(s, args); });
}
exports.publish = publish;
function verify(action, times, callback) {
    if (times === void 0) { times = 1; }
    var currentInvokes = invokes_1.getInvokes().filter(function (s) { return s.action === action; });
    expect(currentInvokes.length).to.equal(times, action + " not invoked");
    if (callback) {
        callback(currentInvokes);
    }
}
exports.verify = verify;
function clear(props) {
    if (props === void 0) { props = {}; }
    var _a = props.subscribers, subscribers = _a === void 0 ? true : _a, _b = props.invokes, invokes = _b === void 0 ? true : _b;
    if (subscribers) {
        subscribers_1.clearSubscribers();
    }
    if (invokes) {
        invokes_1.clearInvokes();
    }
}
exports.clear = clear;
