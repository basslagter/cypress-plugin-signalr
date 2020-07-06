"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./src/api");
var SignalRMock_1 = require("./src/SignalRMock");
Cypress.Commands.add('hubPublish', api_1.publish);
Cypress.Commands.add('hubVerify', api_1.verify);
Cypress.Commands.add('hubClear', api_1.clear);
global.signalrMock = new SignalRMock_1.SignalRMock();
