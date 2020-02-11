const Thumbnail = ({imageUrl, caption}) => {
    return (
        <div className="thumbnail">
            <img src={imageUrl} className="thumbnail_image"/>
            <h4 className="thumnail_caption">{caption}</h4>

            <style jsx>
                {`
                    .thumbnail {
                        border: 1px grey solid;
                        margin-bottom: 5px;  
                    }
                     .tumbnail_image {
                        width: 100%;
                    }
                    .thumnail_caption {
                        text-align: center;
                    }
                     
                `}</style>
        </div>
    );
};

export default Thumbnail;