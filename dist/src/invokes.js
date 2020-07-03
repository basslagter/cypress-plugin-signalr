"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearInvokes = exports.addInvoke = exports.getInvokes = void 0;
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
