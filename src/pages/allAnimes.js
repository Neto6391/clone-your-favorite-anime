import { useState, useEffect } from "react";

import AnimeList from "../components/animes/AnimeList";
import Loading from "../components/animes/Loading";
import Layout from "../components/layout/Layout";


function AllAnimesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedAnimes, setLoadedAnimes] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=0')
            .then(response => (response.json()))
            .then(({ data }) => {
                const animes = [];

                data.forEach((anime, index) => {
                    const { id, attributes } = anime;

                    animes.push({
                        id: id,
                        title: attributes.titles.en ? attributes.titles.en : attributes.canonicalTitle,
                        synopsis: attributes.synopsis,
                        image: {
                            large: attributes.posterImage.large,
                            small: attributes.posterImage.small,
                            tiny:  attributes.posterImage.tiny
                        },
                    });
                })
                
                setIsLoading(false);
                setLoadedAnimes(animes);
            });
    }, []);

    if (isLoading) {
        return (
            <Layout>
                <Loading />
            </Layout>
        );
    }
    return (
        <Layout>
            <AnimeList animes={loadedAnimes} />
        </Layout>
    );
}

export default AllAnimesPage;