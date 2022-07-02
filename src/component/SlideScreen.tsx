import React from 'react';

interface SlideScreenProps {
    order: number;
    children?: React.ReactNode
}

const SlideScreen:React.FC<SlideScreenProps> = (props) => {
    let yOffset:number = props.order * 100;
    
    return (
        <div className = { "absolute w-full min-h-screen ease-in-out duration-1000" }
            style={{ top: yOffset + "%", position: props.order === 0 ? "fixed" : "absolute", zIndex: props.order === 0 ? 20 : 0, display: props.order === 0 ? "block" : "none" }}
        >
            { props.children }  
        </div>
    );
}

export default SlideScreen;