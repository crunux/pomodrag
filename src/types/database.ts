export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            chores: {
                Row: {
                    content: string
                    created_at: string
                    id: number
                    pomo: number
                    status: Database["public"]["Enums"]["status"]
                }
                Insert: {
                    content: string
                    created_at?: string
                    id?: number
                    pomo?: number
                    status?: Database["public"]["Enums"]["status"]
                }
                Update: {
                    content?: string
                    created_at?: string
                    id?: number
                    pomo?: number
                    status?: Database["public"]["Enums"]["status"]
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            status: "new" | "in-process" | "done"
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}