import { Post } from './post'

export interface User {
    email: string;
    password: string;
    posts: Post[];
}