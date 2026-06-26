import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

interface NavigationBarProps {
    onSearch: (term:string) => void,
    onThemeToggle: () => void
}

function NavigationBar( {onSearch, onThemeToggle} : NavigationBarProps ) {
    const searchRef = useRef<HTMLInputElement>(null);
    return (
        <>
        <div className="flex bg-gray-200 dark:bg-gray-800 items-center px-2 py-3 justify-between">
            <a className="flex items-center cursor-pointer" href="/">
                <img className="w-10 h-10 md:w-20 md:h-20 rounded-full mr-2" src="/icon.jpg" alt="icon-home" />
                <h1 className="font-bold text-shadow-lg shrink-0 md:text-4xl">TV-Maze</h1>
            </a>
        
            <div className="flex pl-3 md:pr-4 items-center">
                <div className="hidden md:inline-block dropdown dropdown-hover mr-10">
                <div tabIndex={0} role="button" className="btn m-1 text-xl bg-transparent hover:border-transparent dark:bg-gray-600">Category ⌄</div>
                <ul tabIndex={-1} className="dropdown-content dark:text-black menu dark:bg-slate-300 bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li className="dark:hover:bg-white rounded-l"><a>Category 1</a></li>
                    <li className="dark:hover:bg-white rounded-l"><a>Category 2</a></li>
                </ul>
                </div>
                <input ref={searchRef} className="bg-gray-100 dark:bg-gray-300 dark:text-black py-1 px-3 rounded-xl w-45 md:w-70 lg:w-200 md:text-2xl placeholder-gray-800 focus-visible:outline-none" type="text" id="search-input" placeholder="Search movies..." />
                <CiSearch className="w-6 h-6 text-black dark:text-white ml-2 md:h-8 md:w-8 cursor-pointer" onClick={() => {
                    if (searchRef.current && searchRef.current.value)
                        onSearch(searchRef.current.value);
                }}/>
                <input onChange={onThemeToggle} id="theme-toggle" type="checkbox" className="hidden lg:inline-grid mx-2 toggle" />
                <label htmlFor="theme-toggle" className="hidden lg:inline-block text-xl cursor-pointer">Dark Mode</label>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;