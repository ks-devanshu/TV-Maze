import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import ContentView from "./components/ContentView";

const categories:string[] = [
    'drama','science','fiction','thriller','action','crime','horror','romance','adventure'
];

export default function App() {
  const searchHandler = (term:string) => {
    console.log(term);
  }
  const [theme, setTheme] = useState('');
  const switchTheme = () => setTheme( theme ? '' : 'dark' );

  return <div data-theme={theme}>
    <NavigationBar onSearch={searchHandler} onThemeToggle={switchTheme} />
    {categories.map( category => <ContentView key={category} category={category} /> )}
  </div>
}