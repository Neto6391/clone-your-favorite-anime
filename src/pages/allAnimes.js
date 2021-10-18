import AnimeList from "../components/animes/AnimeList";
import Layout from "../components/layout/Layout";


function AllAnimesPage() {
    const animes = [
        { labelName: 'Cowboy Bepop1' },
        { labelName: 'Cowboy Bepop2' },
        { labelName: 'Cowboy Bepop3' },
        { labelName: 'Cowboy Bepop4' },
        { labelName: 'Cowboy Bepop5' },
        { labelName: 'Cowboy Bepop6' },
        { labelName: 'Cowboy Bepop7' },
        { labelName: 'Cowboy Bepop8' }
    ];
    return (
        <Layout>
            <AnimeList animes={animes} />
        </Layout>
    );
}

export default AllAnimesPage;