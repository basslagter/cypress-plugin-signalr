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

export function removeSubscriber(action: string, callback: (args: any[]) => void): void {
  const filterByActionAndCallback = (subscriber: ISubscriber): boolean => (
    subscriber.action !== action && subscriber.callback !== callback
  );
  subscribers = subscribers.filter(filterByActionAndCallback);
}
