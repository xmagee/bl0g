import ReactMarkdown from 'react-markdown'

export default function Blog8() {
    return (
        <ReactMarkdown 
            parserOptions={{ commonmark: true }} 
            children={`
## blog #8 | upcoming changes 

I am currently just adding JS files to the Github repo for this project, with markdown content in 
a verbatim string, in a ReactMarkdown element. My next upgrade for this site is to just have .md files 
in a directory, and dynamically load a list of them on the /blogs page to reduce the amount of code and 
time to update. 

I got a bit distracted tho playing New World (its o.k.), and now Valorant ranked (so sweaty) :) 

okay bye till next time!
            `} />
    )
}