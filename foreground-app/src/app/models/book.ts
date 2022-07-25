export class Book {
    id?: string;
    author: {
        firstname: string,
        lastname: string
    };
    title: string;
    isRead: boolean;
    yearRead?: number;
}