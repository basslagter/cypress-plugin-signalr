import ISubscriber from './contracts/ISubscriber';

export let subscribers: ISubscriber[] = [];

export function clearSubscribers() {
  subscribers = [];
}