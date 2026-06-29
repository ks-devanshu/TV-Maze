import useServices from "../services/useServices";
import HorizontalCardList from "./HorizontalCardList";
import LoadingCard from "./LoadingCard";


function SearchResultView( {term} : {term:string} ) {
    const {data, isLoading} = useServices.get(term);
    return (
            <div className="bg-[#FF69B4] dark:bg-[#069494] my-3 ring-6 dark:ring-white">
                <h2 className="font-serif text-5xl md:text-8xl m-2 mb-0 md:m-3 text-white">Search Results:</h2>
                {isLoading ? <LoadingCard /> : <HorizontalCardList shows={data || []} />}
            </div>
    )
}

export default SearchResultView;