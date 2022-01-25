import Head from 'next/head'
import { BASE_PAGE_TITLE } from '../Constants'
import { useEffect } from 'react'

export default function Home({ setCurrentPage }) {

    useEffect(() => {
        setCurrentPage('home')
    }, [])

	return (
		<>
			<Head>
				<title>{BASE_PAGE_TITLE} Alex Magee's Homepage</title>
			</Head>

			<p>
                Hi! I am a software developer from Pennsylvania, with a B.S. in Computer Information 
                Systems & Technology. I enjoy all kinds of software projects but professionally, I am a 
                web developer. Technologies I typically utilize in development are Javascript/NodeJS, 
                ReactJS/NextJS, C#/VB.NET/.NET and Linux.
            </p>

            <br />

            <p>
                I left some projects on this site on the /portfolio page, but to get the latest and 
                greatest code that I am writing, check out my github profile!
            </p>
		</>
	)
}