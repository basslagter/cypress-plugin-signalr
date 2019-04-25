<div>
    <a href="https://npmcharts.com/compare/webpack?minimal=true">
        <img src="https://img.shields.io/npm/dm/cypress-plugin-signalr.svg">
    </a>
    <a href="https://packagephobia.now.sh/result?p=webpack">
        <img src="https://packagephobia.now.sh/badge?p=cypress-plugin-signalr" alt="install size">
    </a>
    <a href="https://github.com/webpack/webpack/graphs/contributors">
        <img src="https://img.shields.io/github/contributors/basslagter/cypress-plugin-signalr.svg">
    </a>
</div>
	
<h1>cypress-plugin-signalr</h1>
<p>Verify and publish actions from and to your SignalR hubs</p>

## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Get started](#get-started)
4. [Usage](#usage)

<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save-dev cypress-plugin-signalr
```

Install with yarn:

```bash
yarn add cypress-plugin-signalr --dev
```

<h2 align="center">Introduction</h2>

cypress-plugin-signalr is a plugin for cypress that provides a mock for the SignalR hub connection
and adds cypress commands to publish (hubPublish) and/or verify (hubVerify) actions from and to your
SignalR hub.

<h2 align="center">Get started</h2>

After installing the package include an import in the cypress/support/index.js file, like:
```javascript
import 'cypress-plugin-signalr';
```
The plugin exposes the SignalRMock on the global object as 'signalrMock';
You can decide for yourself how to use this object in your app but in most cases you probably
want to pass it to your application, for example on the window object, like:

```javascript
Cypress.Commands.overwrite('visit', (originalFn, url) => {
  return originalFn(url, {
    onBeforeLoad(window) {
      window.signalrMock = signalrMock;
    },
  });
});
```
In your app you have to take this object and use it when defined, like:

```javascript
const connection = window.signalrMock || new signalR.HubConnectionBuilder()
    .withUrl(hubUrl)
    .build();
```

<h2 align="center">Usage</h2>

Within cypress you now have three new commands:
<br/><br/>
1. hubPublish
This command publishes the specified action with the specified attribute, like:

```javascript
  it('should publish an action', () => {
    cy
      .hubPublish('notification:receive', 'My notification');
  });
```

This will execute the code in registered subscribers, like:

```javascript
    connection.on('notification:receive', (message) => {
      console.log(message); // logs: 'My notification'
    });
```

2. hubVerify
This command verifies that a specific message is invoked, like:

```javascript
  it('should invoke an action', () => {
    cy
      .hubVerify('DeleteNotification', 1, (invokes) => {
        expect(invokes[0].args[0]).to.equal(123);
      });
  });
```
As you can see it provides you with the invocations occurred for this action.
An action is invoked with SignalR like:

```javascript
   connection.invoke('DeleteNotification', 123);
```

3. hubClear
This command clears the current state of the mock. this is most likely used to clear invocations between tests.
You can call this command after each test, like:

```javascript
  afterEach(() => {
      cy
        .hubClear();
  });
```