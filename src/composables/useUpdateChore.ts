import type { Chore } from "~/types";

const useUpdateChore = () => {

    const updateChore = async (chore: Chore, field: string) => {
        const user = useSupabaseUser();
        // const choreResponse = ref<Chore | null>(null)
        // const error = ref<string | null>(null)
        if (!chore || !user || !field) return
        try {
            const { data } = await useFetch<Chore>('/api/chores', {
                method: 'PUT',
                body: { chore, field }
            });
            console.log(data);

            return {
                data
            }
            // if (data?.value?.chore) {
            //     choreResponse.value = data?.value?.chore
            // }
            // if (data?.value?.error) {
            //     error.value = data?.value?.error
            // }
        }
        catch (error) {
            console.error(error);
        }
    }
    return {
        updateChore
    }
}


export default useUpdateChore