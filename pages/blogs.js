import Link from 'next/link'
import Head from 'next/head'
import { BASE_PAGE_TITLE, DATA_LOAD_ERROR_MESSAGE } from '../Constants'
import { useEffect, useState } from 'react'
import fs from 'fs'
import path from 'path'

export async function getServerSideProps() { 
    const blogArr = fs.readdirSync(path.join(process.cwd(), 'mdblogs')).reverse().map((e, i) => {
        return parseInt(e.replace('.md', ''))
    }).sort((a, b) => b - a)

    //blogArr = blogArr.sort((a, b) => b - a)

    return { props: { mdblogs: blogArr } }
}

export default function Blogs({ setCurrentPage, mdblogs }) {
    const [ loadingBlog, setLoadingBlog ] = useState(false)

    useEffect(() => {
        setCurrentPage('blogs')
    }, [])

    return (
        <>
            <Head>
				<title>{BASE_PAGE_TITLE} Alex's Blogs</title>
			</Head>
            
            <h3>Here are my blogs, some of them may be interesting 😃</h3>

            {loadingBlog ? ("Loading blog...")
            : 
            (
                <ul className='blogs-list'>
                    {mdblogs.length < 1 ? (DATA_LOAD_ERROR_MESSAGE) :
                        (mdblogs.map((id, iId) => (
                            <li key={iId}>
                                <button className="link-btn" onClick={() => {setLoadingBlog(true)}}>
                                    <Link href={`/blog/${id}`}>{`Blog #${id}`}</Link>
                                </button>
                            </li>
                        )))}
                </ul>
            )}
        </>
    )
}