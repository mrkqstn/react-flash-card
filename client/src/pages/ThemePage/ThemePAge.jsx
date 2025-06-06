import React, { useEffect, useState } from 'react'
import ThemeApi from '../../entities/Themes/Theme.api';
import CardTheme from '../../widgets/CardTheme/CardTheme';



export default function ThemePAge() {
    const [themes, setThemes] = useState([])
      useEffect(() => {
        const getQuestions = async () => {
          try {
            const { data } = await ThemeApi.getAllThemes()
            setThemes(data);
          } catch (error) {
            console.log(error);
          }
        }
        getQuestions();
      }, []);

      console.log('-----------------',themes)
  return (
    <>
    <h1>Выберете тему</h1>
    {themes.map((theme) => (
    <CardTheme key={theme.id} theme={theme}/>    
    ))}
    </>
  )
}
