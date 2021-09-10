import ReactMarkdown from 'react-markdown'

export default function Blog6() {
    return (
        <ReactMarkdown 
            parserOptions={{ commonmark: true }} 
            children={`
## blog #6 | some small updates to the site, yet another resume 

I decided to make *another* resume this year, based on some feedback.

![resume screenshot](https://images1.us-east-1.linodeobjects.com/new_resume_scr.png)

I was in an interview awile back, and was informed that I needed a better resume (it was old as well), 
so I made a new one.  After messing around with it awile, going from a Preact app, to a Preact app with 
dynamic pdf export, to a static website, and now back to the good 'ol PDF in this new version.  Each iteration 
has been driven by feedback I've gotten in emails or interviews, the latter more emberassing than the former 🙂.

![resume repo screenshot](https://images1.us-east-1.linodeobjects.com/new_resume.png)

I put it into a repo on [github](https://github.com/xmagee/resume), so that I can just update 
it and create a new release (export as PDF), then link it from there. Inb4 the next new 
resume in another 3 months lmao. 
            `} />
    )
}