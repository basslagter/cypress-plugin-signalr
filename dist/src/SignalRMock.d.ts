export declare class SignalRMock {
    on(action: string, callback: (...args: any) => void): void;
    invoke<T = any>(action: string, ...args: any): Promise<T>;
    off(action: string, callback: (args: any[]) => void): void;
    onclose(callback?: (error?: Error) => void): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    onreconnecting(callback?: (error?: Error) => void): void;
    onreconnected(callback?: (connectionId?: string) => void): void;
    send(methodName: string, args: any[]): Promise<void>;
}
