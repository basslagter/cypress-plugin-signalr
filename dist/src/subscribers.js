"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribers = [];
function clearSubscribers() {
    exports.subscribers = [];
}
exports.clearSubscribers = clearSubscribers;
function removeSubscriberByAction(action) {
    exports.subscribers = exports.subscribers.filter(function (subscriber) { return subscriber.action !== action; });
}
exports.removeSubscriberByAction = removeSubscriberByAction;
function removeSubscriberByCallback(callback) {
    exports.subscribers = exports.subscribers.filter(function (subscriber) { return subscriber.callback !== callback; });
}
exports.removeSubscriberByCallback = removeSubscriberByCallback;
