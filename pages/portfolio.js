import Link from 'next/link'
import Head from 'next/head'
import { BASE_PAGE_TITLE, PORTFOLIO_LINKS } from '../Constants'
import { useEffect } from 'react'

export default function Portfolio({ setCurrentPage }) {

    useEffect(() => {
        setCurrentPage('portfolio')
    }, [])

    return (
        <>
            <Head>
				<title>{BASE_PAGE_TITLE} Featured Projects</title>
			</Head>

            <p>Here are some projects that I am working on / have completed. Some are cooler than others 😎.</p>

            {PORTFOLIO_LINKS.map((project, projectIndex) => (
                <div key={projectIndex} className='project-card'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
    
                    <img src={project.previmage} 
                        alt={project.previmagealt} />
    
                    <div>
                        <a href={project.sourcelink} target='_blank'>Source</a> {' | '}
                        <a href={project.demolink} target='_blank'>Demo</a>
                    </div>
                </div>
            ))}
        </>
    )
}