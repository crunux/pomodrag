import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Chore } from '~/types'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    const client = await serverSupabaseClient<Database>(event)
    const { chore } = await readBody(event)
    if (!user) return
    const { data: chores, error } = await client.from('chores').update(chore).eq('userId', user.id).returns<Chore[]>().then(response => response)
    return {
        chores: chores as Array<Chore>,
        error
    }
})