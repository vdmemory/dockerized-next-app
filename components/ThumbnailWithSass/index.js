import './styles.scss';

const Thumbnail = ({ imageUrl, caption }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} className="thumbnail_image" />
      <h4 className="thumbnail_caption">{caption}</h4>
    </div>
  );
};

export default Thumbnail;