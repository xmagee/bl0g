import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

export default function Blog1() {
    return (
        <>
            <Head>
                <title>xmagee.com | Blog #1</title>
            </Head>

            <ReactMarkdown 
            parserOptions={{ commonmark: true }} 
            children={`
## blog #1 | Aug 10 2021

Testing out the blog :)  

This is my second attempt at a blog in one year, 
and by that I mean 2nd attempt at making a blog site
and just not replacing or changing it lmao.

I made the last blog with PHP and my own CSS, which was
cool to me because I haven't really used PHP that much
and I enjoy writing CSS for a project starting with 
nothing but a blank page.  This blog is exciting (at the
moment) as well though, since I plan on not only using it 
as a blog but also as a testing ground for using NextJS.
I chose water.css for the styles, I have been using classless 
libraries as of late. 

I am going to use the free Netlify hosting service for now, 
but I will probably throw this onto a Linode or something to 
save money. 
            `} />
        </>

    )
}