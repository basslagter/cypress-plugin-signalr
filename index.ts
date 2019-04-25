import { clear, publish, verify } from './src/api';
import { SignalRMock } from './src/SignalRMock';

Cypress.Commands.add('hubPublish', publish);
Cypress.Commands.add('hubVerify', verify);
Cypress.Commands.add('hubClear', clear);

global.signalrMock = new SignalRMock();