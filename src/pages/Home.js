import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="background">
                <div className="hero-contents">
                    <h1 className="title">USMO</h1>
                    <p className="sub1">Under Graduate Street Medicine Outreach</p>
                    <p className="sub2">Subtitle about what USMO is catchy</p>
                </div>
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>Our mission is to overcome and mitigate barriers that houseless communities/encampments face in relation to accessing healthcare and other services provided in the Berkeley area.</p>
                </div>
            </div>
            <div className="services">
                <h1>Our Services</h1>
            </div>
            {/* Google Maps Embed Iframe */}
            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.852012041112!2d-122.26146392342685!3d37.863752971963095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c2c1a627715%3A0x9a18e2d5d37d59d3!2sKiraku!5e0!3m2!1sen!2sus!4v1709604230119!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <Footer />
        </>
    );
}