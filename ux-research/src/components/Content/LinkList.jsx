export default function LinkList({ links, name }) {
    return (
        <ul className="links-list">
            {links.map((link, index) => (
                <li key={index} className={name}>
                    <a to={link.url}>{link.description}</a>
                </li>
            ))}
        </ul>
    );
}
