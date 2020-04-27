import { subscribers, removeSubscriberByAction, removeSubscriberByCallback } from './subscribers';
import { invokes } from './invokes';

export class SignalRMock {
  on(action: string, callback: (...args: any) => void): void {
    subscribers.push({
      action,
      callback,
    });
  }

  invoke(action: string, ...args: any): void {
    invokes.push({
      action,
      args,
    });
  }

  off(action: string, callback?: (args: any[]) => void): void {
    if (callback) {
      removeSubscriberByCallback(callback)
    } else {
      removeSubscriberByAction(action);
    }
  }

  onclose(callback?: (error?: Error) => void): void {
    return;
  }

  start(): Promise<void> {
    return Promise.resolve();
  }

  stop(): Promise<void> {
    return Promise.resolve();
  }

  onreconnecting(callback?: (error?: Error) => void): void {
    return;
  }

  onreconnected(callback?: (connectionId?: string) => void): void {
    return;
  }

  send(methodName: string, args: any[]): Promise<void> {
    return Promise.resolve();
  }
}