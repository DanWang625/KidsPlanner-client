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
    user: User
}

export interface Notification {
    _id: string;
    message: string;
    user: User
}

export interface UserProps {
    userName: string;
    userAge: number;
    userId: string;
}

export interface PlanProps {
    userId: string;
    planTitle: string;
    planDescription: string;
    planId: string;
}

export interface TaskProps {
    taskId: string;
    taskTitle: string;
    description: string;
    taskStatus: ['Not Started', 'In Progress', 'Finished']
}
