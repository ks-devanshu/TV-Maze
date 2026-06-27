import type { Show } from "../services/apiClient";


// const temp:string[] = ['','','','','',''];

interface Props {
    shows: Show[];
}

function HorizontalCardList( {shows} : Props ) {
    return (
        <>
        <h2 className="text-3xl lg:text-6xl py-2 pb-0 lg:py-5 mx-5 mb-0 text-[#723480] dark:text-[#DBD4FF] font-bold">Genres</h2>
        <div className="card card-side max-w-10/10 overflow-scroll overflow-y-hidden scrollbar-none">
            {shows.map( (each) => <figure key={each.show.id} className="mx-1 ml-2 my-1 shrink-0 w-20 h-30 md:w-30 md:h-40 lg:w-50 lg:h-60 cursor-pointer hover-3d">
                <img className="rounded-xl"
                src={ each.show.image?.original ? each.show.image.original : each.show.image?.medium || "https://static.tvmaze.com/uploads/images/original_untouched/457/1143235.jpg"}
                alt={each.show.name} />
            </figure> )}
            <figure className="mx-1 mt-1 my-2 ml-2 shrink-0 w-20 h-30 md:w-30 md:h-40 lg:w-50 lg:h-60 bg-[#DBD4FF] dark:bg-[#FFFFE3] cursor-pointer rounded-xl hover-3d">
                <span className="max-h-fit max-w-fit text-2xl dark:text-[#723480]">➔</span>
            </figure>
        </div>
        </>
    )
}

export default HorizontalCardList;