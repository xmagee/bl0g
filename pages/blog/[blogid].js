import Head from 'next/head'
import { BASE_PAGE_TITLE } from '../../Constants'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

export async function getServerSideProps(context) { 
    
    const requestedBlogid = context.params.blogid, 
        res = context.res

    if (Number.isInteger(parseInt(requestedBlogid)) === false) {
        res.writeHead(404, { Location: '/blogs'})
        res.end()
        return true
    }

    const blogText = fs.readFileSync(`./mdblogs/${requestedBlogid}.md`, 'utf8')

    return { props: { blogText: blogText } }
}


export default function Blog({ setCurrentPage, blogText }) {
    const router = useRouter(), 
        { blogid } = router.query

    useEffect(() => {
        setCurrentPage(`blogs --blogid=${blogid}`)
    }, [])

    return (
        <>
            <Head>
                <title>{BASE_PAGE_TITLE} Blog #{blogid}</title>
            </Head>

            <ReactMarkdown 
                parserOptions={{ commonmark: true }}
                remarkPlugins={[remarkBreaks]}>
                {blogText}
            </ReactMarkdown>
        </>
    )
}