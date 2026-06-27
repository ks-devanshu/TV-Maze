import useServices from "../services/useServices";
import HorizontalCardList from "./HorizontalCardList";

function ContentView( {category} : {category:string} ) {
    const {data} = useServices.get(category);
    return (
        <>
        <div className="bg-[#FFFFE3] dark:bg-[#808034]">
            <HorizontalCardList category={category.toUpperCase()} shows={data || []} />
        </div>
        </>
    )
}

export default ContentView;