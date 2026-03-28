import Typed from "typed.js";
import { useEffect } from "react";

import "../Typed/TypedComponent.css"

export default function TypedComponent(){
    useEffect(() => {
        const typed = new Typed("#typed", {
            strings: ["Desarrollador .NET + React", "Analista de sistemas"],
            typeSpeed: 25,
            backSpeed: 25,
            backDelay: 2000,
            loop: true,
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