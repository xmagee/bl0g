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
							<h4>Software Developer I</h4>
							<p>Seneca Resources</p>
							<i>March 2022 - present</i>
							<ul>
								<li>
									Developing applications for the .NET ecosystem using C#
								</li>
								<li>
									SQL Server database development
								</li>
							</ul>
						</li>
						<li>
							<h4>Contract Software Developer</h4>
							<p>Self-employed</p>
							<i>May 2020 - April 2022</i>
							<ul>
								<li>
									Primarily developing web applications
								</li>
								<li>
									Technologies/frameworks most used include C#, VB.NET, Javascript, ReactJS, NodeJS, Sql
								</li>
							</ul>
						</li>
						<li>
							<h4>Programmer Intern</h4>
							<p>American Refining Group</p>
							<i>May 2019 - May 2020</i>
							<ul>
								<li>
									Worked on internal ASP.NET sites using VB.NET, C#, Sql
								</li>
								<li>
									Made changes to Wordpress training site 
								</li>
								<li>
									Created an I.T. inventory management webapp using React, C#/.NET 5, Sql
								</li>
							</ul>
						</li>
						<li>
							<h4>QA Intern</h4>
							<p>Graham Packaing</p>
							<i>August 2018 - April 2019</i>
							<ul>
								<li>
									Tested production line product samples for consistancy, logged measurements and results		
								</li>
								<li>Compared results to historical data </li>
							</ul>
						</li>
					</ul>
				</ProfileSection>

				<ProfileSection header="Education">
					<ul className="profile-prolist">
						<li>
							<h4>Bachelors of Science (B.S.), Computer Information Systems & Technology</h4>
							<p>University of Pittsburgh</p>
							<i>September 2016 – April 2020</i>
							<ul>
								<li>
									President, I.T. Club
								</li>
								<li>
									Treasurer / Webmaster, Esports club
								</li>
							</ul>
						</li>
						<li>
							<h4>High School Diploma</h4>
							<p>Bradford Area High School, Bradford, PA</p>
							<i>September 2012 – June 2016</i>
							<ul>
								<li>
									A+ Certification (2016), NOCTII skills certification 
								</li>
								<li>
									SkillsUSA competitor, I.T. 
								</li>
								<li>
									Completed 3 yrs. of Computer Maintenance skills program
								</li>
							</ul>
						</li>
					</ul>
				</ProfileSection>

				<ProfileSection header="Projects / Published Work">
					<div className="profile-skillslist">
						<ul>
							<li>
								CASA Mckean website maintenance - <a href="https://casamckean.org" target="_blank">www.casamckean.org</a>
							</li>
							<li>
								ReactJS gists - <a href="https://react-gists.netlify.app/" target="_blank">react-gists.netlify.app</a>
							</li>
						</ul>
					</div>
				</ProfileSection>
			</div>
		</>
	)
}