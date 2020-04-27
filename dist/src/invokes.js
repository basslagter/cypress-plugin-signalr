"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invokes = [];
function getInvokes() {
    return invokes;
}
exports.getInvokes = getInvokes;
function addInvoke(invoke) {
    invokes.push(invoke);
}
exports.addInvoke = addInvoke;
function clearInvokes() {
    invokes = [];
}
exports.clearInvokes = clearInvokes;
