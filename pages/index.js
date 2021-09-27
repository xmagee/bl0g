import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>xmagee.com | Alex Magee's Greatest Hits 😎</title>
			</Head>

			<p>
				Hi! I am a software developer from Pennsylvania, with a B.S. in Computer
				Information Systems & Technology.  I enjoy all kinds of software projects 
				but professionally, I am a web developer. Technologies I typically 
				utilize in development are Javascript/NodeJS, ReactJS/NextJS, C#/VB.NET/.NET 
				and Linux.
			</p>

			<p>
				I left some projects on this site on the <a href='/projects'>/projects</a> page, but to get the latest
				and greatest check out my <a href='https://github.com/xmagee'>github profile</a>. 
			</p>

			<hr className='hr-with-margin' />			

			<div className='spotify-section'>
				<div className='spotify-weekly-title'>
					<h3>
						<u>Highlight Spotify Playlist</u>
					</h3>

					<i>Some pretty good songs <br /> (constantly updated)</i>
				</div>
				
				<div className='spotify-weekly-container'>
					<iframe src='https://open.spotify.com/embed/playlist/3ZafZWKVyWRvWf8cuA00Ch' 
						width='450' 
						height='300' 
						frameborder='0' 
						allowtransparency='true' 
						allow='encrypted-media' />
				</div>
			</div>
		</>
	)
}