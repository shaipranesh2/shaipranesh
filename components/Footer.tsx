import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    const iconSize = 42;

    const iconStyle = {
        fontSize: iconSize,
        color: "#0075FF",
        opacity:"0.6",
        transition: "opacity 0.3s",
    };

    const hoverIconStyle = {
        ...iconStyle,
        opacity: 1,
    };

    const [iconHovered, setIconHovered] = useState([false, false, false]);

    return (
        <>
            <div className="flex gap-16 p-8">
                <div>
                    <a href='https://github.com/shaipranesh2'>
                        <GitHubIcon
                            style={iconHovered[0] ? hoverIconStyle : iconStyle}
                            onMouseEnter={() => setIconHovered([true, false, false])}
                            onMouseLeave={() => setIconHovered([false, false, false])}
                        />
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/shaipranesh-s-921461215/'>
                        <LinkedInIcon
                            style={iconHovered[1] ? hoverIconStyle : iconStyle}
                            onMouseEnter={() => setIconHovered([false, true, false])}
                            onMouseLeave={() => setIconHovered([false, false, false])}
                        />
                    </a>
                </div>
                <div>
                    <a href='mailto:f20200731@pilani.bits-pilani.ac.in'>
                        <EmailIcon
                            style={iconHovered[2] ? hoverIconStyle : iconStyle}
                            onMouseEnter={() => setIconHovered([false, false, true])}
                            onMouseLeave={() => setIconHovered([false, false, false])}
                        />
                    </a>
                </div>
            </div>
            <h2 style={{ textAlign: "center" }}>I am most responsive on LinkedIn and my email.</h2>
        </>
    );
}
