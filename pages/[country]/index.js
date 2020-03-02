import axios from "axios";
import Link from "next/link";

// import ThumbnailWithSass from "../../components/ThumbnailWithSass";
import Thumbnail from "../../components/Thumbnail";

import TvshowStyles from "./styles";

const Home = ({ shows }) => {
  console.log(shows);

  const renderShows = () => {
    return shows.map(({ show: { image, name } }, idx) => {
      return (
        <li className="itemShow" key={`name${idx}`}>
          <Thumbnail
            imageUrl={(image && image.medium) || undefined}
            caption={name}
          />
        </li>
      );
    });
  };

  return (
    <div>
      <Link href="\about">
        <a>About</a>
      </Link>
      <ul className="tvshows">{renderShows()}</ul>
      <style jsx>{TvshowStyles}</style>
    </div>
  );
};

Home.getInitialProps = async context => {
  const country = context.query.country || "bg";

  const response = await axios.get(
    `https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );

  return { shows: response.data };
};

export default Home;
