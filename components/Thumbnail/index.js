import Link from "next/link";

import ThumbnailStyles from "./styles";

const Thumbnail = ({
  imageUrl = "https://via.placeholder.com/210x295?text=?",
  caption
}) => {
  return (
    <div className="thumbnail">
      <Link href="/[country]/[showId]" as="/us/5617">
        <a>
          <img src={imageUrl} className="thumbnail_image" />
          <h4 className="thumnail_caption">{caption}</h4>
        </a>
      </Link>
      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
