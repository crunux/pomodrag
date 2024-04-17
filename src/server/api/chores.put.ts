import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Chore } from '~/types'
import type { Database } from '~/types/database.types'

export default defineEventHandler(async (event) => {
    const { field, chore } = await readBody(event)
    console.log(field);
    const user = await serverSupabaseUser(event)
    const client = await serverSupabaseClient<Database>(event)
    if (!user || !field) return
    const { data, error } = await client.from('chores').update({ [`${field}`]: chore[`${field}`] }).eq('id', chore.id).returns<Chore>()
    return {
        chore: data as Chore,
        error
    }
})