import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Chore } from '~/types'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    const client = await serverSupabaseClient<Database>(event)
    const { id } = await readBody(event)
    if (!user) return
    const { error } = await client.from('chores').delete().eq('id', id)
    return {
        error
    }
})

// .returns<Chore[]>().then(response => response)
