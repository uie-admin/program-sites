export default function Section({ children, name, color, split = "", bg, wrap }) {
    const styleObj = {};

    if (bg) {
        styleObj.backgroundImage = `url(images/${bg})`;
    }

    if (color) {
        styleObj.backgroundColor = `var(${color})`;
    }

    return (
        <section
            id={name}
            className={["section", name, color].filter(Boolean).join(" ")}
            style={styleObj}
        >
            <div
                className={["inner-column", split ? "section-split" : "", wrap ? "section-wrap" : ""]
                    .filter(Boolean)
                    .join(" ")}
            >
                {children}
            </div>
        </section>
    );
}
