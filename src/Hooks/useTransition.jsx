import React, { useState } from "react";
import useClass from "./useClass";

function useTransition() {
    const { addClass } = useClass();

    const setTrans = (name, sec, className = "on") => {
        const selector = document.querySelector(name);
        if (!selector) return;
        setTimeout(function () {
            addClass(document.querySelector(name), className);
        }, sec);
    };

    return {
        setTrans,
    };
}

export default useTransition;
