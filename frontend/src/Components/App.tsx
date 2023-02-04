import React from 'react';
import Grid from '@mui/material/Grid';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { EditorPage } from './Pages/EditorPage'
import { ContactPage } from './Pages/ContactPage'
import { SettingPage } from './Pages/SettingPage'


const App : React.FunctionComponent = () => {

  return (
    <div>

      <BrowserRouter>

        { /** ナビゲーシション（Drawer） リンク先を変更 */ }
        <div className = 'Navigation'>
          <Grid container>

            <Grid item xs = { 6 } sm = { 2 }>
              <Link to = '/home' style = { { textDecoration: 'none' , fontWeight: 'bold' } }>
                <span>Home</span>
              </Link>
            </Grid>

            <Grid item xs = { 6 } sm = { 2 }>
              <Link to = '/editor' style = { { textDecoration: 'none' , fontWeight: 'bold' } }>
                <span>Editor</span>
              </Link>
            </Grid>

            <Grid item xs = { 6 } sm = { 2 }>
              <Link to = '/contact' style = { { textDecoration: 'none' , fontWeight: 'bold' } }>
                <span>Contact</span>
              </Link>
            </Grid>

            <Grid item xs = { 6 }  sm = { 2 }>
              <Link to = '/setting' style = { { textDecoration: 'none' , fontWeight: 'bold' } }>
                <span>Setting</span>
              </Link>
            </Grid>

          </Grid>
        </div>

        { /** メインコンテンツ URLに応じて表示内容を変更 */ }
        <div className = 'Main'>
          <Routes>
            <Route path = '/'        element = { <HomePage />} />
            <Route path = '/home'    element = { <HomePage />} />
            <Route path = '/editor'  element = { <EditorPage />} />
            <Route path = '/setting' element = { <SettingPage />} />
            <Route path = '/contact' element = { <ContactPage />} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );

};


export default App;