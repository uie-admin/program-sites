import "./GreenArticle.css";

export default function GreenArticle({ children }) {
    return (
        <section className="GreenArticle">
            <div className="GreenArticle-content">{children}</div>
        </section>
    );
}
