/* eslint-disable no-multi-assign */
import React, { useEffect, useState } from "react";

const Loader = () => {
    const [uniqueId, setUniqueId] = useState("");
    useEffect(() => {
        setUniqueId(Math.random().toString(36).substr(2, 9));
    }, []);

    return (
        <svg
            viewBox="0 0 200 200"
            color="#5555c1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id={`spinner-secondHalf-${uniqueId}`}>
                    <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
                    <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
                </linearGradient>
                <linearGradient id={`spinner-firstHalf-${uniqueId}`}>
                    <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
                    <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
                </linearGradient>
            </defs>

            <g strokeWidth="10">
                <path
                    stroke={`url(#spinner-secondHalf-${uniqueId})`}
                    d="M 4 100 A 96 96 0 0 1 196 100"
                />
                <path
                    stroke={`url(#spinner-firstHalf-${uniqueId})`}
                    d="M 196 100 A 96 96 0 0 1 4 100"
                />
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="M 4 100 A 96 96 0 0 1 4 98"
                />
            </g>

            <animateTransform
                from="0 0 0"
                to="360 0 0"
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1300ms"
            />
        </svg>
    );
};

export default Loader;
