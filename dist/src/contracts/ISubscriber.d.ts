export default interface ISubscriber {
    action: string;
    callback: (...args: any) => void;
}
