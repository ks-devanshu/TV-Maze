import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient"

export interface Show {
    score : number,
    show : {
        id: number,
        url: string,
        name: string,
        language: string,
        image: {medium:string,original: string},
    }
}

class Services {
    get = (q:string) => useQuery({
        queryKey: ['shows',q],
        queryFn: () => apiClient.get('/shows',{
            params: {
                q,
            }
        }).then(res => res.data),
        staleTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    });
}

export default new Services();