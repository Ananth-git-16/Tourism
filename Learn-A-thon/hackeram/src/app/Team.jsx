export default function Team({image,name}){
    return(
        <>
            <div className="photo">
                <img src={image}></img>
                <center>
                    <p className="nam">{name}</p>
                    <p className="role">Organizer</p>
                </center>
                
            </div>
        </>
    );
}