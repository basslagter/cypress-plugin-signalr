import IInvoke from './contracts/IInvoke';

export let invokes: IInvoke[] = [];

export function clearInvokes() {
  invokes = [];
}