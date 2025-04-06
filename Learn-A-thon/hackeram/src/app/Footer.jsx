import "./foot.css";
import Contact from "./Contact.jsx";
export default function Footer() {
    return(
        <>
            <div className="contact-us">
                <p>For Contact Us</p>
            </div>
            <div>
                <Contact></Contact>
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <h3>Explore the Ninja Hack</h3>
                    <div className="footer-links">
                        <div>
                            <a href="#">Home</a>
                                <a href="#">Future</a>
                        </div>
                        <div>
                            <a href="#">News</a>
                            <a href="#">Culture</a>
                        </div>
                        <div>
                            <a href="#">Sport</a>
                            <a href="#">TV</a>
                        </div>
                        <div>
                            <a href="#">Reel</a>
                            <a href="#">Weather</a>
                        </div>
                        <div>
                            <a href="#">Worklife</a>
                            <a href="#">Sounds</a>
                        </div>
                        <div>
                            <a href="#">Travel</a>
                            <a href="#">Reference</a>
                        </div>
                    </div>
                    
                    <div className="footer-bottom-links">
                        <a href="#">Terms of Use</a>
                        <a href="#">About the BBC</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Accessibility Help</a>
                        <a href="#">Parental Guidance</a>
                        <a href="#">Contact the NINJA</a>
                        <a href="#">Ninja emails for you</a>
                        <a href="#">Advertise with us</a>
                        <a href="#">AdChoices / Do Not Sell My Info</a>
                    </div>

                    <p className="copyright">
                        <strong>Copyright © 2025 NINJA.</strong> The NINJA is not responsible for the content of external sites. 
                        <a href="#">Read about our approach to external linking.</a>
                    </p>
                </div>
            </footer>
        </>
    );
}