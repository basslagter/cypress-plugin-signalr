import IInvoke from './contracts/IInvoke';

let invokes: IInvoke[] = [];

export function getInvokes(): IInvoke[] {
  return invokes;
}

export function addInvoke(invoke: IInvoke): void {
  invokes.push(invoke);
}

export function clearInvokes(): void {
  invokes = [];
}
