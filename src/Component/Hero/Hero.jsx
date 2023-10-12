import React, { useState, useEffect } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import { useSelector } from 'react-redux'
import Img from '../LazyImg/Img'
import ContentWrapper from '../ContentWrapper/ContentWrapper'

const Hero = () => {

    const [backgorund, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }

    }
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);


    
    
    return (
        <div className='heroBanner'>
             {!loading && (
                <div className="backdrop-img">
                    <Img src={backgorund} />
                </div>
            )}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className='heroBannerContent'>
                    <span className='title'>Welcome</span>
                    <span className='subTitle'> Millions of movies, TV shows and people to discover. Explore now</span>
                    <div className='searchInput'>
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button type='submit'>Search Now</button>
                    </div>
                </div>

            </ContentWrapper>

        </div>
    )
}

export default Hero
