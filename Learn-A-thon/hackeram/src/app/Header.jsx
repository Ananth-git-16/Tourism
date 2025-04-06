import logo from "/public/logo.png";
import HeadCompoent from "./HeadComp.jsx";
export default function header(){
    return(
        <>
            <div className="head">
                {/* <img className="logo" src="/logo.png"></img> */}
                {/* <h1>hEDADRY</h1>
                <h1>hEDADRY</h1> */}
                {/* <div className="home">
                    
                </div> */}
                <HeadCompoent name="HOME"></HeadCompoent>
                <HeadCompoent name="EXPLORE"></HeadCompoent>
                <HeadCompoent name="ABOUT"></HeadCompoent>
                <HeadCompoent name="EVENTS"></HeadCompoent>
                {/* <HeadCompoent name="CONTACT"></HeadCompoent> */}
                <div className="b">
                <button className="but">LOGIN</button>
                </div>
                
                
                
            </div>
        </>
    )
}