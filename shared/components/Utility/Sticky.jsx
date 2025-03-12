
export default function Sticky({ children, className }) {

    return (<div className={'sticky ' + className}>{children}</div>);
};

