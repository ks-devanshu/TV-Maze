import type { Show } from "../services/useServices";

interface Props {
    shows: Show[];
}

function HorizontalCardList({shows} : Props ) {
    return (
        <div className="p-4 underline decoration-2 decoration-white bg-[#FF69B4] dark:bg-[#069494] italic font-serif">
            <div className="border-white dark:border-[#000000] border-x-15 carousel bg-white dark:bg-[#000000] rounded-box max-w-10/10 space-x-2 p-4">
            {shows.map ( (each, index) =>  
                <div key={index} className="carousel-item">
                <a href={each.show.url} className="rounded-box hover-3d w-40 h-70 md:w-50 md:h-80">
                    <img
                    src={each.show.image?.original || each.show.image?.medium || 'https://demofree.sirv.com/nope-not-here.jpg'}
                    className="rounded-box min-w-full min-h-full max-w-full max-h-full" />
                </a>
                </div>
            )}
            </div>
        </div>
    )
}

export default HorizontalCardList;