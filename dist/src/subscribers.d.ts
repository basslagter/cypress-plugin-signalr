import ISubscriber from './contracts/ISubscriber';
export declare function getSubscribers(): ISubscriber[];
export declare function addSubscriber(subscriber: ISubscriber): void;
export declare function clearSubscribers(): void;
export declare function removeSubscriberByAction(action: string): void;
export declare function removeSubscriberByCallback(callback: (args: any[]) => void): void;
