import { subscribers } from './subscribers';
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

  onclose() {
    return;
  }
}