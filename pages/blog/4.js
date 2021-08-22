import ReactMarkdown from 'react-markdown'

export default function Blog3() {
    return (
        <ReactMarkdown 
            parserOptions={{ commonmark: true }} 
            children={`
## blog #4 | Aug 22 2021

Decided to start usign md for the blog, using [this plugin](https://github.com/remarkjs/react-markdown).  Currently, the blog text is still just 
in .js, but eventually I plan to have one reusable blog component, and load markdown in from individual files. I also added the .md support for 
its useful formatting features, which I will use since this is a tech-centric blog :^).

Anyways to just try it out, here is the current /blog/ component: 
\`\`\`
import ReactMarkdown from 'react-markdown'

export default function Blog3() {
    return (
        <ReactMarkdown 
            parserOptions={{ commonmark: true }} 
            children={markdown_goes_here} />
    )
}
\`\`\`

Very cool 😎.

The next update will probably be next weekend or something.
            `} />
    )
}