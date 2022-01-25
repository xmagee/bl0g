import Link from 'next/link'
import Head from 'next/head'
import { BASE_PAGE_TITLE, DATA_LOAD_ERROR_MESSAGE } from '../Constants'
import { useEffect } from 'react'
import fs from 'fs'

export async function getServerSideProps() { 
    const blogArr = fs.readdirSync('./mdblogs').reverse().map((e, i) => {
        return e.replace('.md', '')
    })

    return { props: { mdblogs: blogArr } }
}

export default function Blogs({ setCurrentPage, mdblogs }) {
    useEffect(() => {
        setCurrentPage('blogs')
    }, [])

    return (
        <>
            <Head>
				<title>{BASE_PAGE_TITLE} Alex's Blogs</title>
			</Head>
            
            <h3>Here are my blogs, some of them may be interesting 😃</h3>

            <ul className='blogs-list'>
                {mdblogs.length < 1 ? (DATA_LOAD_ERROR_MESSAGE) :
                    (mdblogs.map((id, iId) => (
                        <li key={iId}>
                            <Link href={`/blog/${id}`}>{`Blog #${id}`}</Link>
                        </li>
                    )))}
            </ul>
        </>
    )
}