import type { Chore, DragDropChore, StateChore, GetDataResponse } from '@/types/index'

interface FecthChores {
    chores: Chore[]
    error: any

}
type FetchDataResponse = GetDataResponse | { error: string | Error }

const useGetChores = async (): Promise<FetchDataResponse> => {
    const nuxtApp = useNuxtApp();
    const user = useSupabaseUser();

    if (!user) return { error: new Error('No user loged') }

    const { data, refresh, error } = await useFetch<FecthChores>('/api/chores', {
        key: "chores",
        method: 'GET',
        transform(input) {
            return {
                ...input,
                fetchedAt: new Date().getTime()
            }
        },
        getCachedData(key) {
            return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        }
    });

    return {
        data: computed(() => data?.value?.chores) as any,
        // chores: computed(() => chores.value) as any,
        error: error.value?.message || null,
        refresh,
    }

}

export default useGetChores