import { User } from "./user";

export interface Post {
    _id: string;
    place: string;
    description: string;
    imageUrl: string;
    userId: string;
    likes: string[];
    user: User;
}