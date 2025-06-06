import React from 'react'

export default function CardTheme({theme}) {
  return (
                <Button 
                  variant="outline-primary"
                  style={{ display: "block", margin: "5px 0", width: "100%" }}
                >
                  {theme.theme_name}
                </Button>
  )
}
