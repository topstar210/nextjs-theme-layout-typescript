import '@/styles/globals.css'
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import axios from "axios";

import ThemeChanger from '@/components/ThemeChanger';
import Layout1 from '@/layouts/Layout1'
import Layout2 from '@/layouts/Layout2'
import Layout3 from '@/layouts/Layout1'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
 
  const setCurrTheme = (theme: string) => {
    setTheme(theme)
    // // saving theme when select the theme type
    // axios.post('/api/save_theme',{ theme });
  }

  // initial load theme with api
  useEffect(()=>{
    (async () => {
      const res = await axios.get('https://testapi.io/api/bobyui/theme');
      const settingData = res.data;
      setTheme(settingData.theme)
    })()
  },[])

  return (
    <ThemeProvider>
      <ThemeChanger setCurrTheme={setCurrTheme} currTheme={theme} />
      {theme === "light" &&
        <Layout1>
          <Component {...pageProps} />
        </Layout1>
      }
      {theme === "theme1" &&
        <Layout2>
          <Component {...pageProps} />
        </Layout2>
      }
      {theme === "pink" &&
        <Layout3>
          <Component {...pageProps} />
        </Layout3>
      }
    </ThemeProvider>
    )
}
