export default function Testimonial({ icon, children, author, isVertical }) {
    const isVerticalClassname = isVertical ? "vertical-testimonial" : "";

    return (
        <div className={"testimonials-test " + isVerticalClassname}>
            <img
                src={"images/" + icon}
                alt=""
                className={
                    "testimonials-icon testimonials-" +
                    icon.substring(0, icon.indexOf("."))
                }
            />
            {children}
            <p><strong>{author}</strong></p>
        </div>
    );
}
