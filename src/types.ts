export interface User {
    _id: string;
    name: string;
    age: number;
}

export interface Task {
    _id: string;
    title: string;
    description: string;
    status: ['Not Started', 'In Progress', 'Finished'];
}

export interface Plan {
    _id: string;
    title: string;
    description: string;
    tasks: [Task]
}
