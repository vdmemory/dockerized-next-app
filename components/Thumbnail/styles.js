import css from "styled-jsx/css";

const ThumbnailStyles = css`
  .thumbnail {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px grey solid;
    padding-top: 15px;
    margin-bottom: 5px;
  }
  .thumbnail_image {
    width: 200px;
  }
  .thumnail_caption {
    text-align: center;
  }
`;

export default ThumbnailStyles;
