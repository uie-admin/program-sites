import "./Testimonials.css";

export default function Testimonials({ children }) {
    return (
        <section
            className="testimonials"
            style={
                {
                    // backgroundImage: `url(${process.env.PUBLIC_URL}/images/square-background.png)`
                }
            }
        >
            <div className="testimonials-content">
                <div className="testimonials-test">
                    <img
                        src="images/star.png"
                        alt="star"
                        className="testimonials-star"
                    />
                    {children}
                </div>
            </div>
        </section>
    );
}
