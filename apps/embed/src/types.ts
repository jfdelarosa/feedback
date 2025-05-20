export interface PulseKitUser {
    id?: string;
    externalId?: string;
    email?: string;
    name?: string;
    avatar?: string;
}

export interface FeedbackItem {
    id: string;
    title: string;
    content: string;
    userId: string;
    createdAt: string;
    votes: {
        id: string;
        userId: string;
    }[];
    userVote?: number;
    comments: FeedbackComment[];
    showComments?: boolean;
    newComment?: string;
    user: {
        id: string;
        name: string;
        avatar: string;
        email: string;
    };
}

export interface FeedbackComment {
    id: string;
    content: string;
    userId: string;
    userName?: string;
    userAvatar?: string;
    createdAt: string;
}