import { addSubscriber, removeSubscriber } from './subscribers';
import { addInvoke } from './invokes';

export class SignalRMock {
  on(action: string, callback: (...args: any) => void): void {
    addSubscriber({ action, callback });
  }

  invoke(action: string, ...args: any): void {
    addInvoke({ action, args });
  }

  off(action: string, callback: (args: any[]) => void): void {
    removeSubscriber(action, callback);
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