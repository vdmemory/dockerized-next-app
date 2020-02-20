const Thumbnail = ({imageUrl, caption}) => {
    return (
        <div className="thumbnail">
            <img src={imageUrl} className="thumbnail_image"/>
            <h4 className="thumnail_caption">{caption}</h4>

            <style jsx>
                {`
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
                     
                `}</style>
        </div>
    );
};

export default Thumbnail;