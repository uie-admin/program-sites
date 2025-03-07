import "./RightContent.css";

export default function RightContent({ children }) {
    return (
        <section className="right-content">
            <div className="right-content-container">{children}</div>
        </section>
    );
}
