type DeleteResponse = { isDelete: boolean | null, error: string | null } | { error: Error }


const useDeleteChores = () => {

    const deleteChore = async (id: number): Promise<DeleteResponse> => {
        const user = useSupabaseUser();
        if (!id || !user) return { error: new Error('No id or user') }
        const { error } = await useFetch('/api/chores', {
            method: 'DELETE',
            body: { id }
        });
        return {
            isDelete: !error ? true : false,
            error: error.value?.message || null
        }
    }
    return {
        deleteChore
    }

}

export default useDeleteChores