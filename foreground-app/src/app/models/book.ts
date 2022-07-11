export class Book {
    _id: string;
    author: {
        firstname: string,
        lastname: string
    };
    title: string;
    isRead: boolean;
    yearRead: number;
    hasAttachement: boolean;
}