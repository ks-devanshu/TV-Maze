import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import useServices from "./services/useServices";
import HorizontalCardList from "./components/HorizontalCardList";
import LoadingCard from "./components/LoadingCard";
import SearchResultView from "./components/SearchResultView";

const categories:string[] = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

export default function App() {
  const [searchedTerm, setSearchedTerm] = useState<string>('');
  const searchHandler = (term:string) => setSearchedTerm(term);
  const [theme, setTheme] = useState('');
  const switchTheme = () => setTheme( theme ? '' : 'dark' );

  return (
    <div data-theme={theme}>
      <NavigationBar onSearch={searchHandler} onThemeToggle={switchTheme} />
      {searchedTerm && <SearchResultView term={searchedTerm}/>}
      {categories.map( (category, index) => {
        const {data, isLoading} = useServices.get(category);
        return ( isLoading ? <LoadingCard key={index} /> : <HorizontalCardList key={index} shows={data || []} />)
      } )}
    </div>
  )
}