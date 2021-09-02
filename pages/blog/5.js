import ReactMarkdown from 'react-markdown'

export default function Blog5() {
    return (
        <ReactMarkdown 
            parserOptions={{ commonmark: true }} 
            escapeHtml={true}
            children={`
## blog #5 | elementaryOS 6 is pretty cool

![elementaryOS system info screenshot](https://images1.us-east-1.linodeobjects.com/blog5img1.png)

I've been a fan of elementaryOS for awile now; I typically try out the new releases as they are announved if I am 
not already using the distro on a machine. What I really like about the newest release is the system-wide dark theme. It really 
is nice to just click one button and not have my eyes burned at night when working. 

I'm still using Arch+KDE on the desktop since I have too much on there to reinstall, but for now my laptop is running elementary again :).
            `} />
    )
}