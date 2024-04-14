export type ProviderOAuth = 'github' | 'google' | 'discord';

export type StateChore = 'new' | 'in-process' | 'done';

export interface Chore {
    id: number;
    content: string;
    status: StateChore;
    pomo: number;
    created_at: string;
    userId: string;
}

export interface ChoreCreate {
    content: string;
    status?: string;
}

export interface DragDropChore {
    id: number, title: string, status: string, chores: Chore[]
}

export interface DragEvent extends Event {
    added: { element: Chore } | undefined
    removed: { element: Chore } | undefined
    moved: { element: Chore } | undefined
}