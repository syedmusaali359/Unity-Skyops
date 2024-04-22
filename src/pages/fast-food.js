import React from "react";
import UnityApp from '../components/UnityApp'
function FastFood() {
    return (
        <UnityApp
            loaderUrl="https://stickball.s3.amazonaws.com/fast-food-cashier/fast-food-cashier.loader.js"
            dataUrl="https://stickball.s3.amazonaws.com/fast-food-cashier/fast-food-cashier.data"
            frameworkUrl="https://stickball.s3.amazonaws.com/fast-food-cashier/fast-food-cashier.framework.js"
            codeUrl="https://stickball.s3.amazonaws.com/fast-food-cashier/fast-food-cashier.wasm"
            title="Fast Food Cashier"
            vidUrl=""
        />
    );
}

export default FastFood;
