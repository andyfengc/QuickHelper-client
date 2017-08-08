export class Message{
    id: number;
    senderId: number;
    receiverId: number;
    taskId: number;
    parentMessageId: number;
    text: string;
    createdTime: Date;
}