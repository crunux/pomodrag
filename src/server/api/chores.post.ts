import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Chore } from '~/types'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    const client = await serverSupabaseClient<Database>(event)
    if (!user) return
    const { content, status, pomo, created_at, } = await readBody(event)
    console.log(content, status, pomo, created_at, user.id);

    try {
        const { data, error } = await client.from('chores').insert({ content, status, pomo, created_at, userId: user.id }).select().then(response => response)
        console.log(data, error);
    } catch (error) {
        console.error(error)
        return {
            error
        }
    }

    //const { data: chores, error } = await client.from('chores').select('*')
})