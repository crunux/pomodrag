import type { ChoreCreate, CreateChoreResponse, ReturnComposableCreate} from '@/types/index';

type CreateResponse = CreateChoreResponse | { error: Error }


const useCreateChore = (): ReturnComposableCreate => {
    const user = useSupabaseUser();
    const createChore = async (chore: ChoreCreate): Promise<CreateResponse> => {
        const { content, status } = chore
        const statusConfirm = status || 'new';
        if (!user || !content) return { error: new Error('No user loged or not content') };
        const { error } = await useFetch('/api/chores', {
            method: 'POST',
            body: { content: content, status: statusConfirm },
        });
        return {
            isCreate: !error? true: false,
            error: error.value?.message || null
        }
    }
    return {
        createChore
    }
}

export default useCreateChore