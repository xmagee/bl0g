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

			[PROFILE UNDER CONSTRUCTION]
		</>
	)
}