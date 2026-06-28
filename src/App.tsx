import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import useServices from "./services/useServices";
import HorizontalCardList from "./components/HorizontalCardList";
import LoadingCard from "./components/LoadingCard";

const categories:string[] = [
    'comedy','fiction','child','thrill','tra','act','science','hor','romance','adv'
];

export default function App() {
  const searchHandler = (term:string) => {
    console.log(term);
  }
  const [theme, setTheme] = useState('');
  const switchTheme = () => setTheme( theme ? '' : 'dark' );

  return <div data-theme={theme}>
    <NavigationBar onSearch={searchHandler} onThemeToggle={switchTheme} />
    {categories.map( (category, index) => {
      const {data, isLoading} = useServices.get(category);
      
      return ( isLoading ? <LoadingCard key={index} /> : <HorizontalCardList key={index} shows={data || []} />)
      } )}
  </div>
}