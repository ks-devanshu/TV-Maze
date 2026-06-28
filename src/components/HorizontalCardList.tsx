import type { Show } from "../services/useServices";

interface Props {
    category: string;
    shows: Show[];
}

function HorizontalCardList( { category, shows} : Props ) {
    return (
        <>
        <h2 className="text-3xl lg:text-6xl py-2 pb-0 lg:py-5 mx-5 mb-0 text-[#723480] dark:text-[#DBD4FF] font-bold">{category.toUpperCase()}</h2>
        <div className="card card-side max-w-10/10 overflow-scroll overflow-y-hidden scrollbar-none">
            {shows.map( (each, index) => <figure key={index} className="mx-1 ml-2 my-1 shrink-0 w-20 h-30 md:w-30 md:h-40 lg:w-50 lg:h-60 cursor-pointer aura aura-xl aura-dual text-[#723480]">
                <a className="rounded-xl" href={each.show.url} target="_blank">
                    <img className="min-w-10/10 min-h-10/10 max-w-10/10 max-h-10/10 rounded-xl"
                    src={each.show.image?.original || each.show.image?.medium || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKtDsGGh7hLviohukOzAkdiYJsxwVEoPhDA&s'}
                    alt={each.show.name} />
                </a>
            </figure> )}
        </div>
        </>
    )
}

export default HorizontalCardList;