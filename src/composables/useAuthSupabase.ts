import type { ProviderOAuth } from "~/types"


const useAuthSupabase = () => {
    const supabase = useSupabaseClient()

    const signInWithOAuth = async (provider: ProviderOAuth) => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider,
        })
        if (error) return console.log(error)

        return data
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error)
    }

    return {
        signInWithOAuth,
        signOut
    }
}


export default useAuthSupabase;