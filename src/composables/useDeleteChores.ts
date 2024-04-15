const useDeleteChores = () => {



    const deleteChore = async (id: number) => {
        const user = useSupabaseUser();
        if (!id || !user) return
        try {
            const { error } = await useFetch('/api/chores', {
                method: 'DELETE',
                body: { id }
            });
            return {
                error
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    return {
        deleteChore
    }

}


export default useDeleteChores