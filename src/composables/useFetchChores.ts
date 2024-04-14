import type { Chore, DragDropChore } from '@/types/index'
import type { Database } from '~/types/database.types';

interface FecthChores {
    chores: Chore[]
    error: any

}

interface useFetchReturn {
    choresNew: Chore[];
    choresInProcess: Chore[];
    choresDone: Chore[];
    chores: DragDropChore[];
    error: any;
}


const useGetChoresSupabase = async (): Promise<useFetchReturn | undefined> => {
    const user = useSupabaseUser();
    const chores = ref<Chore[] | undefined>([])
    const error = ref<any>()
    if (!user) return
    try {
        const { data } = await useFetch<FecthChores>('/api/chores', {
            method: 'GET',
        });
        if (data?.value?.chores) {
            chores.value = data?.value?.chores
        }
        if (data?.value?.error) {
            error.value = data?.value?.error
        }
    }
    catch (error) {
        console.error(error);
    }

    return {
        choresNew: chores.value?.filter(chore => chore.status === 'new') as Chore[] || [],
        choresInProcess: chores.value?.filter(chore => chore.status === 'in-process') as Chore[] || [],
        choresDone: chores.value?.filter(chore => chore.status === 'done') as Chore[] || [],
        chores: [
            { id: 1, title: 'New Chores', status: 'new', chores: chores.value?.filter(chore => chore.status === 'new') as Chore[] || [] },
            { id: 2, title: 'In-Process Chores', status: 'in-process', chores: chores.value?.filter(chore => chore.status === 'in-process') as Chore[] || [] },
            { id: 3, title: 'Done Chores', status: 'done', chores: chores.value?.filter(chore => chore.status === 'done') as Chore[] || [] },
        ] as DragDropChore[],
        error: error.value || undefined,
    }

}


export default useGetChoresSupabase


// const { data: chores, error } = await useAsyncData('chores', async () => await client.from('chores').select('*').eq('user', id).returns<Chore[]>().order('created_at').then(response => response))
// console.log(chores.value?.data, chores.value?.error, error, 'composables useGetChoresSupabase.ts');

// return { chores: chores.value?.data, error: error.value }