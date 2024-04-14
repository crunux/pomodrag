import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Chore } from '~/types'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    const client = await serverSupabaseClient<Database>(event)
    if (!user) return
    const { data: chores, error } = await client.from('chores').select('*').eq('userId', user.id).returns<Chore[]>().then(response => response)
    //const { data: chores, error } = await client.from('chores').select('*')
    return {
        chores: chores as Array<Chore>,
        error
    }
})