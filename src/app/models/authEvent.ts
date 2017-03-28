import { User } from './user';
export interface AuthEvent {
    status: string;
    eventType: string;
    message: string;
    user?: User;
}