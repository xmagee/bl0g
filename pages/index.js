import Head from 'next/head'
import { BASE_PAGE_TITLE } from '../Constants'
import { useEffect } from 'react'

function ProfileSection(props) {
	const { header, children } = props;
	return (
	  	<div className="profile-section">
			<h3>{header}</h3>
			<p>{children}</p>
		</div>
	)
  }

export default function Home({ setCurrentPage }) {

	useEffect(() => {
		setCurrentPage('home')
	}, [])

	return (
		<>
			<Head>
				<title>{BASE_PAGE_TITLE} Alex Magee's Homepage</title>
			</Head>

			<div className="profile">
				<div className="profile-header-section">
					<div className="profile-header">
						<img className="profile-image"
							alt="Alex Magee profile picture"
							src="https://avatars.githubusercontent.com/u/86931568?v=4" />
					</div>

					<p className="image-attrib">
						<a href="https://en.wikipedia.org/wiki/Yellowstone_National_Park#/media/File:Beautiful_Meadow_in_Yellowstone_National_Park.JPG" 
							target="_blank">
							"Meadow in Yellowstone National Park"
						</a>
						, by &nbsp;
						<a href="https://commons.wikimedia.org/wiki/User:Jrmichae" 
							target="_blank">
							Jrmichae
						</a>
						, licensed under CC BY-SA 4.0 &nbsp;
					</p>

					<div className="profile-section">
						<h3>Alex Magee</h3>
						<p><i>Software Developer I</i></p>
						<p className="text-half-opac">Pittsburgh, Pennsylvania, United States</p>
					</div>
				</div>

				<div className="profile-section">
					<h3>About</h3>
					<p>
						I am a software developer with a bachelor’s degree in Computer Information
						Systems and Technology from the University of Pittsburgh; 3.2 GPA. I have
						experience developing rich web experiences one year as an intern, and
						nearly two years working self-employed. Currently happily employed as a
						Software Developer at Seneca Resources, LLC.
					</p>
				</div>

				<ProfileSection header="Skills">
					<div className="profile-skillslist">
						<ul>
							<li>
								C#, Javascript, VB.NET, MSSQL, MySql, SqLite, Rust, PHP
							</li>
							<li>
								Windows/Windows Server, Linux, Azure, AWS
							</li>
							<li>
								ReactJS, WPF, Winforms/Webforms, NextJS, Wordpress
							</li>
						</ul>
					</div>
				</ProfileSection>

				<ProfileSection header="Professional Experience">
					<ul className="profile-prolist">
						<li>
							<h4>position</h4>
							<p>Company, LLC</p>
							<i>date - date</i>
							<ul>
								<li>a</li>
								<li>b</li>
							</ul>
						</li>
						<li>

						</li>
					</ul>
				</ProfileSection>

				<ProfileSection header="Education">
					[TODO]
				</ProfileSection>

				<ProfileSection header="Clubs / Organizations">
					[TODO]
				</ProfileSection>

				<ProfileSection header="Projects / Published Work">
					[TODO]
				</ProfileSection>
			</div>
		</>
	)
}