import type { ChoreCreate } from '@/types/index';

const useCreateChore = () => {
    const user = useSupabaseUser();
    const createChore = async (chore: ChoreCreate) => {
        if (!user || !chore.content) return;
        const { content, status } = chore
        const statusConfirm = status || 'new';
        const { error } = await useFetch('/api/chores', {
            method: 'POST',
            body: { content: content, status: statusConfirm },
        });
        return {
            error
        }
    }
    return {
        createChore
    }
}


export default useCreateChore