export interface Election {
    _id: string;
    name: string;
    party: string;
    number: number;
    votes: number;
    comment: string;
    image: string;
    createdAt: Date;
}
