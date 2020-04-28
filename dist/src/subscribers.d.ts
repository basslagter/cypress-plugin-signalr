import ISubscriber from './contracts/ISubscriber';
export declare function getSubscribers(): ISubscriber[];
export declare function addSubscriber(subscriber: ISubscriber): void;
export declare function clearSubscribers(): void;
export declare function removeSubscriber(action: string, callback: (args: any[]) => void): void;
