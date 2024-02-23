export interface User {
    _id: string;
    name: string;
    age: number;
    tasks: Task[];
    rewards: Reward[];
    points: number
}

export interface Task {
    _id: string;
    title: string;
    description: string;
    status: ['Not Started', 'In Progress', 'Finished'];
    points: number
}

export interface Reward {
    _id: string;
    title: string;
    descriptioin: string;
    costs: number
}
