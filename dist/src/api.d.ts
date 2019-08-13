import IInvoke from './contracts/IInvoke';
import { IClearProps } from './contracts/IClearProps';
export declare function publish(action: string, ...args: any): void;
export declare function verify(action: string, times?: number, callback?: (invokes: IInvoke[]) => void): void;
export declare function clear(props: IClearProps): void;
