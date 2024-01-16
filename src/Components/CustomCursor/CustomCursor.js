import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    useEffect(() => {
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 10, fill: "forwards" });
        };

        const onMouseOver = () => {
            cursorDot.classList.add('cursor-dot-enlarged');
        };

        const onMouseOut = () => {
            cursorDot.classList.remove('cursor-dot-enlarged');
        };

        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseover', onMouseOver);
            link.addEventListener('mouseout', onMouseOut);
        });

        window.addEventListener("mousemove", moveCursor);

        // Cleanup function to remove the event listeners
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseover', onMouseOver);
                link.removeEventListener('mouseout', onMouseOut);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div>
        </>
    );
};

export default CustomCursor;