export declare class SignalRMock {
    on(action: string, callback: (...args: any) => void): void;
    invoke(action: string, ...args: any): void;
    onclose(): void;
}
