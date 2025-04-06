import Time from "./Time";
import ButtonComp from "./ButtonComp";
export default function Content(){
    return(
        <div className="container">
                <div className="first">
                    <div className="empty">

                    </div>
                    <div className="limbo">
                        <p><b>JOIN NINJA HACKS</b></p>
                    </div>
                    <div className="animated-text">
                        {"WIN AWESOME PRIZES".split("").map((char, i) => (
                            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                    <div className="info">
                        <p>
                        Join us on 7th April 2025 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.
                        </p>
                    </div>
                    <div className="time">
                        <Time moment="Days" backgroundColor="white" textColor="black"></Time>
                        <Time moment="Hours" backgroundColor="black" textColor="white"></Time>
                        <Time moment="Minutes" backgroundColor="white" textColor="black"></Time>
                        <Time moment="Seconds" backgroundColor="black" textColor="white"></Time>
                    </div>
                </div>
                <div className="second">
                        <div className="cal">
                            <img className=" flip-image"src="./ninja.png"></img>
                        </div>
                        <div className="butn">
                            <ButtonComp first="Judges" second="Fill this form"></ButtonComp>
                            <ButtonComp first="Registration" second="Hackers Registration"></ButtonComp>
                        </div>
                </div>
            </div>
            
    );
    
}