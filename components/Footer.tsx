import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    const iconSize = 42; // Change this value to adjust the icon size

    const iconStyle = {
        fontSize: iconSize,
        color: "#0075FF"
    };

    return (
        <>
            <div className="flex gap-16 p-8">
                <div>
                    <a href='https://github.com/shaipranesh2'>
                        <GitHubIcon style={iconStyle} />
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <LinkedInIcon style={iconStyle}/>
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <EmailIcon style={iconStyle}/>
                    </a>
                </div>
            </div>
            <h2 style={{textAlign:"center"}}>I am most responsive on LinkedIn and my email.</h2>
        </>
    );
}