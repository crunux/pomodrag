import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Chore } from '~/types'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event): Promise<Chore | unknown> => {
    const user = await serverSupabaseUser(event)
    const client = await serverSupabaseClient<Database>(event)
    const { content, status } = await readBody(event)
    if (!user) return
    try {
        const { error } = await client.from('chores').insert({ content, status, userId: user!.id }).select().then(response => response)
        
        if (error) return {
            isSave: false,
            save: 'no'
        }

        return {
            isSave: true,
            save: 'ok'
        }
    } catch (error) {
        return {
            error
        }
    }

    //const { data: chores, error } = await client.from('chores').select('*')
})