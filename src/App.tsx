import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import useServices from "./services/useServices";
import HorizontalCardList from "./components/HorizontalCardList";

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
    {categories.map( category => {
      const {data} = useServices.get(category);
      return <HorizontalCardList shows={data || []} />
      } )}
  </div>
}