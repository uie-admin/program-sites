
export default function Float({ children }) {



    return (
        <div className="float-container">
            <div className="placeholder">
                {children}
            </div>
            <div className={"float"}
            >
                {children}
            </div>
        </div >
    );
}
