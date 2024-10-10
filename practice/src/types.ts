export type TodoItem = {
    id: string;
    text: string;
    completed: boolean;
};

export interface Events {
    'todo-updated': TodoItem[];
}