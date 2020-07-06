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
function removeSubscriber(action, callback) {
    var filterByActionAndCallback = function (subscriber) { return (subscriber.action !== action && subscriber.callback !== callback); };
    subscribers = subscribers.filter(filterByActionAndCallback);
}
exports.removeSubscriber = removeSubscriber;
