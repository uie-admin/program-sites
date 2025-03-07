import "./Article.css";

export default function Article({ children }) {
    return (
        <section className="article">
            <div className="article-content">{children}</div>
        </section>
    );
}
