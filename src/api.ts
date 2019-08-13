import { clearInvokes, invokes } from './invokes';
import { clearSubscribers, subscribers } from './subscribers';
import IInvoke from './contracts/IInvoke';
import { IClearProps } from './contracts/IClearProps';

export function publish(action: string, ...args: any) {
  subscribers
    .filter(s => s.action === action)
    .forEach(s => s.callback(...args));
}

export function verify(action: string, times: number = 1, callback?: (invokes: IInvoke[]) => void) {
  const currentInvokes = invokes.filter(s => s.action === action);

  expect(currentInvokes.length).to.equal(times, `${action} not invoked`);

  if (callback) {
    callback(currentInvokes);
  }
}

export function clear(props: IClearProps) {
  const {
    subscribers = true,
    invokes = true,
  } = props;

  if (subscribers) {
    clearSubscribers();
  }

  if (invokes) {
    clearInvokes();
  }
}