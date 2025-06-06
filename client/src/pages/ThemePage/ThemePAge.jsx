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
    <h1 style={{
      color: '#4e73df', 
      justifyContent: "center", 
      paddingLeft: '820px',
      paddingTop: '80px',
      paddingBottom: '30px',
      }}>Выберете тему</h1>
    {themes.map((theme) => (
    <CardTheme key={theme.id} theme={theme} style={{ 
      border: 'none',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)'
      }
    }}/>    
    ))}
    </>
  )
}
