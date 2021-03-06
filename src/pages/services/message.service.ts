import { Message } from '../models/message.model';

export class MessageService {
    messages = [{
        "id": 1,
        "senderId": 1,
        "receiverId": 2,
        "taskId": 1,
        "parentMessageId": null,
        "text": "请问工作完拍照吗？",
        "createdTime": new Date(2017, 6, 1)
    }, {
        "id": 2,
        "senderId": 2,
        "receiverId": 1,
        "taskId": 1,
        "parentMessageId": 1,
        "text": "是的",
        "createdTime": new Date(2017, 6, 28)
    }, {
        "id": 3,
        "senderId": 3,
        "receiverId": 4,
        "taskId": 2,
        "parentMessageId": null,
        "text": "距离不近，还要等一个小时，30一小时行吗",
        "createdTime": new Date(2017, 7, 5)
    }, {
        "id": 4,
        "senderId": 4,
        "receiverId": 3,
        "taskId": 2,
        "parentMessageId": 3,
        "text": "好的",
        "createdTime": new Date(2017, 7, 13)
    }]

    getMessages(): Message[]{
        return this.messages;
    }
}