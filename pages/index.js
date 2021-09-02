import Image from 'next/image'

export default function Home() {
	return (
		<>
			<span className='page-title-subtitle-container'>
				<p>
					<h4>Projects</h4>
				</p>

				<p>
					Very cool. 😎
				</p>
			</span>
			
			{[
				{
					title: 'Docs Builder', 
					descr: 'A tool built with NodeJS that builds one or many markdown docs into PDFs.', 
					image: 'https://images1.us-east-1.linodeobjects.com/docs_builder.png', 
					image_alt: 'Docs-builder github page.', 
					source: 'https://github.com/xmagee/docs-builder', 
					demo: 'https://github.com/xmagee/docs-builder'
				},
				{
					title: 'Asteriods13k (js13k 2021)', 
					descr: 'A game that I made for the js13k game jam', 
					image: 'https://images1.us-east-1.linodeobjects.com/13k_2021.png', 
					image_alt: 'Asteriods game made with Javascript.', 
					source: 'https://github.com/xmagee/13k-asteroids', 
					demo: 'https://github.com/xmagee/13k-asteroids'
				},
				{
					title: 'React Gists', 
					descr: 'A simple React webapp that showcases Reactjs code snippets that are cool and/or useful.', 
					image: 'https://images1.us-east-1.linodeobjects.com/react_gists.png', 
					image_alt: 'React Gists project screenshot of main screen.', 
					source: 'https://github.com/xmagee/react-gists', 
					demo: 'https://react-gists.netlify.app/'
				},
				{
					title: 'Discord Bot', 
					descr: 'A Discord server bot made with NodeJS and DiscordJS. It currently has some basic commands, more on the way. Coming soon: audio controls, image searching, fetching news articles.', 
					image: 'https://images1.us-east-1.linodeobjects.com/discord_bot.png', 
					image_alt: 'Discord bot source code screenshot.', 
					source: 'https://github.com/xmagee/disco', 
					demo: 'https://github.com/xmagee/disco'
				},
				{
					title: 'VSCode Theme', 
					descr: 'A dark theme for VSCode and VSCodium.', 
					image: 'https://images1.us-east-1.linodeobjects.com/vscode_theme.png', 
					image_alt: 'Screenshot of vscode theme.', 
					source: 'https://github.com/xmagee/xpcode', 
					demo: 'https://marketplace.visualstudio.com/items?itemName=xmagee.xpcode'
				},
				{
					title: 'Resume Site', 
					descr: 'My official resume, hosted on Github pages.', 
					image: 'https://images1.us-east-1.linodeobjects.com/resume_site.png', 
					image_alt: 'Screenshot of my resume site.', 
					source: 'https://github.com/xmagee/xmagee.github.io', 
					demo: 'https://alexmagee.com/'
				}
			].map((project, pIndex) => (
				<div key={pIndex} className='project-card'>
					<u>
						<b>{project.title}</b>
					</u>
	
					<p>
						{project.descr}
					</p>
	
					<Image 
						src={project.image} 
						alt={project.image_alt}
						width='1000'
						height='750' />
					
					<br />
	
					<a href={project.source} 
						target='_blank' 
						rel='noreferrer'>
						Source
					</a> 
					{' | '}
					<a href={project.demo} 
						target='_blank' 
						rel='noreferrer'>
						Demo
					</a>
				</div>
			))}
		</>
	)
}