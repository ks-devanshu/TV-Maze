import useServices, { type Show } from "../services/useServices";
import HorizontalCardList from "./HorizontalCardList";

function ContentView( {category} : {category:string} ) {
    // const {data} = useServices.get(category);
    return (
        <HorizontalCardList category={category.toUpperCase()} shows={[{} as Show,{} as Show,{} as Show,{} as Show,{} as Show,{} as Show,{} as Show,{} as Show,{} as Show,{} as Show]} />
    )
}

export default ContentView;