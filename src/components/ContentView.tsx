import HorizontalCardList from "./HorizontalCardList";


function ContentView() {
    return (
        <>
        <div className="bg-[#FFFFE3] dark:bg-[#808034]">
            <HorizontalCardList />
            <HorizontalCardList />
            <HorizontalCardList />
            <HorizontalCardList />
        </div>
        </>
    )
}

export default ContentView;