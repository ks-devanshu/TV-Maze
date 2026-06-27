import apiClient, { type Query } from "../services/apiClient";
import HorizontalCardList from "./HorizontalCardList";


const query:Query = {
    genre: 'drama',
    pageSize: 5
}

function ContentView() {
    const {data, error} = apiClient(query);

    return (
        <>
        <div className="bg-[#FFFFE3] dark:bg-[#808034]">
                <HorizontalCardList shows={data ? data : []} />
                {/* <HorizontalCardList />
                <HorizontalCardList />
                <HorizontalCardList /> */}
        </div>
        </>
    )
}

export default ContentView;