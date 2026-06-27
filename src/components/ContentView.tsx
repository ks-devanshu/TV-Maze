import useServices from "../services/useServices";
import HorizontalCardList from "./HorizontalCardList";

// const a:string[] = [
//     'drama','science','fiction','thriller','action','crime','horror','romance','adventure'
// ];


function ContentView() {
    const {data, error} = useServices.get('crime');

    return (
        <>
        <div className="bg-[#FFFFE3] dark:bg-[#808034]">
                <HorizontalCardList category={'Drama'} shows={data || []} />
                {/* <HorizontalCardList />
                <HorizontalCardList />
                <HorizontalCardList /> */}
        </div>
        </>
    )
}

export default ContentView;