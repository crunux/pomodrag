import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { Chore } from '~/types'

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)
    if (!user) return
    const client = await serverSupabaseClient(event)
    const { data: chores, error } = await client.from('chores').select('*').eq('user', user?.id).returns<Chore[]>().order('status', { ascending: true }).then(response => response)
    //const { data: chores, error } = await client.from('chores').select('*')
    return {
        chores,
        error
    }
})