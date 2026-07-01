import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

export default function App() {
  const [searchedTerm, setSearchedTerm] = useState<string>('');
  const searchHandler = (term:string) => setSearchedTerm(term);
  const [theme, setTheme] = useState('');
  const switchTheme = () => setTheme( theme ? '' : 'dark' );

  return (
    <div data-theme={theme}>
      <NavigationBar onSearch={searchHandler} onThemeToggle={switchTheme} />
      {/* {searchedTerm && <SearchResultView term={searchedTerm}/>}
      {categories.map( (category, index) => {
        const {data, isLoading} = useServices.get(category);
        return ( isLoading ? <LoadingCard key={index} /> : <HorizontalCardList key={index} shows={data || []} />)
      } )} */}
      <Outlet />
    </div>
  )
}