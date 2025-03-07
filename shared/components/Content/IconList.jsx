export default function IconList({ icons, descriptions, iconSize = "2.5rem" }) {
    return (
        <div className="icon-list">
            {icons.map((icon, index) => (
                <div className="icon-list-item" key={descriptions[index]}>
                    <img
                        src={icon}
                        alt={""}
                        style={{ maxWidth: iconSize, maxHeight: iconSize }}
                    />
                    <span>{descriptions[index]}</span>
                </div>
            ))}
        </div>
    );
}
