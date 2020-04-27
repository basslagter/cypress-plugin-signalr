"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscribers = [];
function getSubscribers() {
    return subscribers;
}
exports.getSubscribers = getSubscribers;
function addSubscriber(subscriber) {
    subscribers.push(subscriber);
}
exports.addSubscriber = addSubscriber;
function clearSubscribers() {
    subscribers = [];
}
exports.clearSubscribers = clearSubscribers;
function removeSubscriberByAction(action) {
    subscribers = subscribers.filter(function (subscriber) { return subscriber.action !== action; });
}
exports.removeSubscriberByAction = removeSubscriberByAction;
function removeSubscriberByCallback(callback) {
    subscribers = subscribers.filter(function (subscriber) { return subscriber.callback !== callback; });
}
exports.removeSubscriberByCallback = removeSubscriberByCallback;
