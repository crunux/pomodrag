import type { Chore } from '@/types/index'
import type { Database } from '~/types/database.types';


const useGetChoresSupabase = async () => {
    const user = useSupabaseUser();
    if (!user) return
    try {
        const { data } = await useFetch<Chore[]>('/api/chores', {
            method: 'GET',
        });

        return {
            chores: data.value as Chore[]
        }
    }
    catch (error) {
        return {
            error
        }
    }

}


export default useGetChoresSupabase


// const { data: chores, error } = await useAsyncData('chores', async () => await client.from('chores').select('*').eq('user', id).returns<Chore[]>().order('created_at').then(response => response))
// console.log(chores.value?.data, chores.value?.error, error, 'composables useGetChoresSupabase.ts');

// return { chores: chores.value?.data, error: error.value }