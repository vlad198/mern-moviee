import React, { useState, useEffect } from 'react';

const Delayed = (props) => {

    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 1000);
    }, [hidden]);

    return ( 
        hidden ? null : props.children
     );
}

export default Delayed;