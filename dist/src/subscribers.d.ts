import ISubscriber from './contracts/ISubscriber';
export declare let subscribers: ISubscriber[];
export declare function clearSubscribers(): void;
export declare function removeSubscriberByAction(action: string): void;
export declare function removeSubscriberByCallback(callback: (args: any[]) => void): void;
