import type { Chore } from '@/types/index'
import { Database } from '~/types/database.types'


const useGetChoresSupabase = async () => {
    const user = useSupabaseUser();
    const client = useSupabaseClient<Database>();
    const id = user.value ? user.value.id : null;
    if (!id) return
    const { data: chores, error } = await useAsyncData('chores', async () => await client.from('chores').select('*').eq('user', id).returns<Chore[]>().order('created_at').then(response => response))
    console.log(chores.value?.data, chores.value?.error, error, 'composables useGetChoresSupabase.ts');

    return { chores: chores.value?.data, error: error.value }
}


export default useGetChoresSupabase