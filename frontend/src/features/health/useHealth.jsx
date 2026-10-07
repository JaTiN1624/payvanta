import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'

export function useHealth(){
    return useQuery({
        queryKey: ['health'],
        queryFn: async () => {
            const { data } = await api.get('/actuator/health')
            return data
        },
        retry: false,
    })
}