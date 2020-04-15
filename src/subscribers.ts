import ISubscriber from './contracts/ISubscriber';

export let subscribers: ISubscriber[] = [];

export function clearSubscribers() {
  subscribers = [];
}

export function removeSubscriberByAction(action: string) {
  subscribers = subscribers.filter(subscriber => subscriber.action !== action);
}

export function removeSubscriberByCallback(callback: (args: any[]) => void) {
  subscribers = subscribers.filter(subscriber => subscriber.callback !== callback)
}