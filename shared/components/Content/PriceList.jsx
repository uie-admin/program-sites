export default function PriceList({ prices }) {
    return (
        <div className="price-list">
            {prices.map((item) => (
                <li key={item.description}>
                    {item.description}
                    <br />
                    {item.price}
                </li>
            ))}
        </div>
    );
}
