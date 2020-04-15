import { subscribers, removeSubscriberByAction, removeSubscriberByCallback } from './subscribers';
import { invokes } from './invokes';

export class SignalRMock {
  on(action: string, callback: (...args: any) => void) {
    subscribers.push({
      action,
      callback,
    });
  }

  invoke(action: string, ...args: any) {
    invokes.push({
      action,
      args,
    });
  }

  off(action: string, callback?: (args: any[]) => void) {
    if (callback) {
      removeSubscriberByCallback(callback)
    } else {
      removeSubscriberByAction(action);
    }
  }

  onclose(callback?: (error?: Error) => void) {
    return;
  }

  start() {
    return Promise.resolve();
  }

  stop() {
    return Promise.resolve();
  }

  onreconnecting(callback?: (error?: Error) => void) {
    return;
  }

  onreconnected(callback?: (connectionId?: string) => void) {
    return;
  }

  send(methodName: string, args: any[]) {
    return Promise.resolve();
  }
}