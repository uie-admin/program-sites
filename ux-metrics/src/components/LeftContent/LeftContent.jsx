import "./LeftContent.css";

export default function LeftContent({ children }) {
    return (
        <section className="left-content">
            <div className="left-content-container">{children}</div>
        </section>
    );
}
