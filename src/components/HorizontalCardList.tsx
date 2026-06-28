import type { Show } from "../services/useServices";

interface Props {
    category: string;
    shows: Show[];
}

function HorizontalCardList( { category, shows} : Props ) {
    return (
        <div className="p-4 underline decoration-2 decoration-white bg-[#FF69B4] italic font-serif">
            <div className="border-white border-x-15 carousel bg-white rounded-box max-w-10/10 space-x-2 p-4">
            {shows.map ( (each, index) =>  
                <div className="carousel-item">
                <a href="" className="rounded-box hover-3d">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    className="rounded-box" />
                </a>
                </div>
            )}
            </div>
        </div>
    )
}

export default HorizontalCardList;