export default function Price({image, name, description}) {
    return(
        <>
            <div className="prize">
                <div className="image-logo">
                    <img src={image}></img>
                </div>
                <div className="prize-name">
                    <p>{name}</p>
                </div>
                <div className="prize-description">
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}