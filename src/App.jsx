import { useEffect } from 'react'
import {fetchDataFromApi} from './utils/Api';
import { useSelector, useDispatch } from 'react-redux'
import {getApiConfiguration } from './Store/homeSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home' 
import  Search from './pages/searchResult/Search';
import Explore from './pages/explore/Explore'
import NotFound from './pages/404/NotFound'
import Header from './Component/header/Header'
import Footer from './Component/footer/Footer'

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig ();
  }, [])

  const fetchApiConfig  = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        // console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
      };

        dispatch(getApiConfiguration(url));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:query' element=
        {<Search/>}/>
        <Route path='/explore/:mediaType'
        element={<Explore/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
