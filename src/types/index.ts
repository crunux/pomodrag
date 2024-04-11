export type ProviderOAuth = 'github' | 'google' | 'discord';

export type StateChore = 'new' | 'in-process' | 'done';

export interface Chore {
    id: string;
    content: string;
    status: StateChore;
    pomo: number;
    created_at: string;
}

export interface ChoreCreate {
    content: string;
    status?: string;
}