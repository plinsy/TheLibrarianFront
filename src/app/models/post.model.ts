export class Post {
    id: number;
    loveIts: string;
    createdAt: Date;

    constructor(public title: string, public content: string) {}
}