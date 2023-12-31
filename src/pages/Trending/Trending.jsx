import React, { useState } from "react";

import Carousel from "../../Component/Carosel/Carosel";
import ContentWrapper from "../../Component/ContentWrapper/ContentWrapper";
import SwitchTab from "../../Component/SwitchTab/SwitchTab";

import useFetch from "../../Component/hook/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;