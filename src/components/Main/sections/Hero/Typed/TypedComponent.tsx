import Typed from "typed.js";
import { useEffect } from "react";

import "../Typed/TypedComponent.css"

export default function TypedComponent(){
    useEffect(() => {
        const typed = new Typed("#typed", {
            strings: ["Analista de Sistemas"],
            typeSpeed: 60,
            backSpeed: 0,
            loop: false,
            showCursor: true,
            cursorChar: "|"
        });

        return () => {
            typed.destroy();
        };
    }, []);
    
    return(
        <span id="typed"></span>
    );
}