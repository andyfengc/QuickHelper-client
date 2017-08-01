export class Task{
    id: string;
    authorId: string;
    avatar?: string;
    nickname: string;
    title: string;
    content: string;
    createdTime: Date;
    startTime: Date;
    endTime: Date;
    price: number;
    address: string;
}