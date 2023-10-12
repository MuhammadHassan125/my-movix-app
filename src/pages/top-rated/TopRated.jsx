import React, { useState } from "react";

import Carousel from "../../Component/Carosel/Carosel";
import ContentWrapper from "../../Component/ContentWrapper/ContentWrapper";
import SwitchTab from "../../Component/SwitchTab/SwitchTab";

import useFetch from "../../Component/hook/useFetch";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Popular" ? "popular" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTab data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default TopRated;