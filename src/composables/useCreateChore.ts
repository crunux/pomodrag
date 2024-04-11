import type { ChoreCreate } from '@/types/index';

const useCreateChore = () => {
    const client = useSupabaseClient();
    const createChore = async (chore: ChoreCreate) => {
        const { content, status } = chore
        // const response = await client.from('chores').insert({
        //     content: content,
        //     status: status ? status : ""
        // })
        return {
            // response
        }
    }
    return {
        createChore
    }
}


export default useCreateChore