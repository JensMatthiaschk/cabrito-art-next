import React from "react";
import Loader from "./Loader";

export default function ClientOnly({ children, ...delegated }) {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return <Loader />;
    }
    return (
        <div {...delegated} className="h-full">
            {children}
        </div>
    );
}