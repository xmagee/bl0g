import ReactMarkdown from 'react-markdown'

export default function Blog7() {
    return (
        <ReactMarkdown 
            parserOptions={{ commonmark: true }} 
            children={`
## blog #6 | m3o

I made a [quick NodeJS app](https://github.com/xmagee/m3o-api-test) to check out the endpoints offered by Micro (m3o). 
I really like endpoints offered currently, I could see many of them being used in app development to save time
on potentially annoying tasks like getting a weather forecast, or checking the sentiment of given text.

![micro's homepage](https://images1.us-east-1.linodeobjects.com/m3o_frontpage.png)

After installing the npm package, its literally this easy to use: 

\`\`\`
client.call('helloworld', 'Call', {
        "name": "Alex"
    })
        .then(response => {
            console.log(response)
        })
\`\`\`

No need to use fetch or axios (you can, but why not just install another npm package lol), which is cool.

The test repo I was using only demo's the npm package, so I can't speak to how well it works outside of NodeJS.  I may 
do some more messing around with C# or something in the future, I mean most of the endpoints are **free to try** so why not? 🙂
            `} />
    )
}