import type { Chore } from "~/types";

type UpdateResponse = { data: Chore | null, error: string | null } | { error: Error }


const useUpdateChore = () => {

    const updateChore = async (newChore: { chore: Chore, field: string }): Promise<UpdateResponse> => {
        const user = useSupabaseUser();
        const { chore, field } = newChore

        if (!chore || !user || !field) return { error: new Error('Not chore or user or field') };

        const { data, error } = await useFetch<Chore>('/api/chores', {
            method: 'PUT',
            body: { chore, field }
        });

        return {
            data: data.value,
            error: error.value?.message || null
        }
    }
    return {
        updateChore,
    }
}

export default useUpdateChore