import Prize from "./Prize.jsx"
import SponsorLogo from "./SponsorLogo.jsx";

export default function NinjaHacks() {
    const lo="{ }"
    return(
        <>
            <div className="ninja">
                <div className="ninja-full">
                    <div className="ninja-two">
                        {/* <div className="circle"> */}
                                <center>
                                    <img src="./ninja-rot.png"></img>
                                    {/* <div className="dot"></div> */}
                                </center>      
                        {/* </div> */}
                    </div>
                    <div className="ninja-one">
                        <p className="what">What is Ninja Hacks?</p>
                        <p className="ans">Hack Ninja is 24 hour long running hackathon will be held on November 20th & 21th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Ninja Hacks will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.</p>
                    </div>
                </div>
                <div className="ninja-prize">
                    <p>Prize Section</p>
                </div>
                <div className="ninja-three">
                    <Prize image="./cup.png" name="overall First" description="First Overall prize will be given to a project that outstands all other submissions"></Prize>
                    <Prize image="./medal1.png" name="overall Second" description="Second Overall prize will be given to the second best project of the hackathon"></Prize>
                    <Prize image="./3rd.png " name="Third Second" description="Best third overall project of the hackathon will win some awesome prizes"></Prize>
                </div>
                <div className="ninja-three">
                
                    <Prize image="./solo.png" name="Best Solo" description="You project will qualify for this prize if you participate alone without a team" ></Prize>
                    <Prize image="./cup.png" name="Best Outgoing Student" description="Your project will qualify for this category if atleast 50%"></Prize>
                    <Prize image="./book.png" name="Best UI/UX" description="Project with most creative designs will be UI/UX track"></Prize>
                </div>
                <div className="ninja-four">
                    <Prize image="./women.png" name="Best Web App with Qoom" description="Must use qoom in your project to win this category" ></Prize>
                    <Prize image="./team.png" name="More Prizes" description="More prizes will be revealed later"></Prize>                    
                </div>
                <div className="sponsor-container">
                    <div className="our-team">
                        <p className="dark">Sponsors & partners</p>
                        <p className="int">Interested in joining in our team</p>
                    </div>
                    <div className="sponsor-logo" >
                        <SponsorLogo image="./googlwe.png"></SponsorLogo>
                        <SponsorLogo image="./gigitech.png"></SponsorLogo>
                        <SponsorLogo image="./glimpse.png"></SponsorLogo>
                    </div>
                    <div className="sponsor-logo" >
                        <SponsorLogo image="./Au.png"></SponsorLogo>
                        <SponsorLogo image="./apple.png"></SponsorLogo>
                        <SponsorLogo image="./amazon1.png"></SponsorLogo>
                    </div>
                    <div className="sponsor-logo" >
                        <SponsorLogo image="./BC TECH.png"></SponsorLogo>
                        <SponsorLogo image="./glimpse.png"></SponsorLogo>
                        <SponsorLogo image="./hp logo.png"></SponsorLogo>
                    </div>
                    
                </div>
            </div>
                
        </>
    );
}