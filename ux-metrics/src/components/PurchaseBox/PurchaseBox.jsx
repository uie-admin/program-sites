import "./PurchaseBox.css";

export default function PurchaseBox({ src, text, price, buttonText }) {
    return (
        <div className="purchase-box">
            <img src={src} alt="computer" />
            <p className="purchase-box-text">
                <b>{text}</b>
            </p>
            <p className="purchase-box-price">
                <b>{price}</b>
            </p>
            <button className="btn-shadow btn purchase-box-button">
                <a
                    className="purchase-box-button-white"
                    href="https://essentials.centercentre.com/metrics"
                >
                    {buttonText}
                </a>
            </button>
        </div>
    );
}
