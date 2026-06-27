import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios from "axios"

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

export interface Query {
    genre: string;
    pageSize: number;
}

const apiClient = ({genre, pageSize}: Query) =>
    useQuery<Show[],Error>( {
        queryKey: ['shows',genre],
        queryFn: () => 
            axios.get<Show[]>('https://api.tvmaze.com/search/shows?q=drama', {
                params: {
                    genre,
                    _limit: pageSize
                }
            }).then(res => res.data),
        staleTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    } )

export default apiClient;