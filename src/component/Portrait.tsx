import React, {useEffect} from 'react';

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Game/Build.loader.js",
    dataUrl: "Game/Build.data",
    frameworkUrl: "Game/Build.framework.js",
    codeUrl: "Game/Build.wasm",
    companyName: "Shmitec",
    productName: "Milovan-Portrait",
    productVersion: "1.0.0"
});

export interface PortraitProps {

}

export type PortraitHandle = {
    callSaySomething: (something:string) => void,
}

const Portrait = React.forwardRef<PortraitHandle, PortraitProps>((
    props, 
    forwardedRef,
) => { 

    React.useImperativeHandle(forwardedRef, ()=>({
        callSaySomething(something:string) {
            unityContext.send("GameController", "SaySomething", something);
        }
    }));
    
    useEffect(function () {
        unityContext.on("debug", function (message) {
          console.log(message);
        });
    }, []);
/*
    this.unityContext.on("loaded", () => {
        this.props.appRef.setGameLoadingState(false, 0.0);
    });

    this.unityContext.on("progress", progression => {
        this.props.appRef.setGameLoadingState(true, progression);
    });
*/

    return (
        <Unity unityContext = { unityContext } />
    );
});

export default Portrait;