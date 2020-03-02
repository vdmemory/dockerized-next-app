import css from "styled-jsx/css";

const TvshowStyles = css`
  .tvshows {
    display: grid;
    list-style-type: none;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  .itemShow {
    grid-column: 1;
    grid-row: 2 / 5;
  }
`

export default TvshowStyles;