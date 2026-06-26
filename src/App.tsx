import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  const searchHandler = (term:string) => {
    console.log(term);
  }
  const [theme, setTheme] = useState('');
  const switchTheme = () => setTheme( theme ? '' : 'dark' );

  return <div data-theme={theme}>
    <NavigationBar onSearch={searchHandler} onThemeToggle={switchTheme} />
  </div>
}