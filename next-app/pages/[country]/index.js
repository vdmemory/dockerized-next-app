import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = ({shows}) => {
    console.log(shows)

    const renderShows = () => {
        return shows.map(({
            show: {
                image,
                name
            }
        }, idx) => {

            return (
                <li key={`name${idx}`}>
                    <Thumbnail imageUrl={image.medium} caption={name}/>
                </li>
            )
        })
    }

    return (
        <div>
        <ul className="tvshows">{renderShows()}</ul>
        <style jsx>
                {`
                    .tvshows {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        list-style-type: none;
                    }
                     
                `}</style>
        </div>
    )
}

Home.getInitialProps = async context => {
    const country = context.query.country || 'bg';

    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)

    return {shows: response.data}
}

export default Home;