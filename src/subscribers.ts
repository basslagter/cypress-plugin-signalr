import ISubscriber from './contracts/ISubscriber';

let subscribers: ISubscriber[] = [];

export function getSubscribers(): ISubscriber[] {
  return subscribers;
}

export function addSubscriber(subscriber: ISubscriber): void {
  subscribers.push(subscriber);
}

export function clearSubscribers(): void {
  subscribers = [];
}

export function removeSubscriberByAction(action: string): void {
  subscribers = subscribers.filter(subscriber => subscriber.action !== action);
}

export function removeSubscriberByCallback(callback: (args: any[]) => void): void {
  subscribers = subscribers.filter(subscriber => subscriber.callback !== callback);
}