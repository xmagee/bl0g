import ReactMarkdown from 'react-markdown'

export default function Blog2() {
    return (
        <ReactMarkdown 
                parserOptions={{ commonmark: true }} 
                children={`
## blog #2 | Aug 13 2021

Made some changes, I think this is good now. I initially used
css-in-js because I just wanted to throw this thing together, 
but i've put it all into .css files since I still think its easier
to manage like that. In the future I would like to have a better 
system of storing the blogs, but for now this is fine. 

Now, lets see if I can actually maintain this and post new things here, and 
not just abandon another blog, and eventually replace it :). 
            `}  />
    )
}