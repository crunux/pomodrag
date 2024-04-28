import type { Howl, HowlOptions } from 'howler'
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


export interface HowlStatic {
  new (properties: HowlOptions): Howl
}

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

export interface SpriteMap {
  [key: string]: [number, number]
}

export type ComposableOptions = {
  volume?: MaybeRef<number>
  playbackRate?: MaybeRef<number>
  interrupt?: boolean
  soundEnabled?: boolean
  autoplay?: boolean
  sprite?: SpriteMap
  onload?: () => void
} & Omit<HowlOptions, 'src'>

export interface PlayOptions {
  id?: number
  forceSoundEnabled?: boolean
  playbackRate?: number
}

export type PlayFunction = (options?: PlayOptions) => void

export interface ReturnedValue {
  play: PlayFunction
  sound: Ref<Howl | null>
  stop: (id?: number) => void
  pause: (id?: number) => void
  isPlaying: Ref<boolean>
  duration: Ref<number | null>
}