import { Link, useParams } from "react-router-dom";
import useServices from "../services/useServices";
import HorizontalCardList from "./HorizontalCardList";
import LoadingCard from "./LoadingCard";

const categories:string[][] = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r'],
    ['s','t','u'],
    ['v','w','x'],
    ['y','z']
];
const maxPages = categories.length;

const Page = () => {
    const params = useParams();
    const pageNo = parseInt(params.number || '1');

    return (
        <>
        <div className="flex flex-col bg-[#FF69B4] dark:bg-[#069494]">
            {categories[pageNo-1].map( (category, index) => {
                const {data, isLoading} = useServices.get(category);
                return ( isLoading ? <LoadingCard key={index} /> : <HorizontalCardList key={index} shows={data || []} />)
            } )}
            <div className="join m-4 place-self-center">
                <button className="border-none shadow-none hover:border-solid hover:border-white join-item btn bg-[#FF69B4] text-white text-2xl font-bold disabled:text-[#FF69B4] dark:bg-[#069494] disabled:dark:text-[#069494]" disabled={pageNo === 1}><Link to={`/page/${pageNo-1}`}>{`<<`}</Link></button>
                <button className="border-none shadow-none join-item btn bg-[#FF69B4] text-white text-2xl font-bold dark:bg-[#069494]" disabled={true}>{pageNo}</button>
                <button className="border-none shadow-none hover:border-solid hover:border-white join-item btn bg-[#FF69B4] text-white text-2xl font-bold disabled:text-[#FF69B4] dark:bg-[#069494] disabled:dark:text-[#069494]" disabled={pageNo === maxPages}><Link to={`/page/${pageNo+1}`}>{`>>`}</Link></button>
            </div>
        </div>
        </>
    )
}

export default Page;