import React from "react";
import "./index.css";
import { Me } from "../../assets/img";
import { CardExperience, Gap } from "../../components";
import { Col, Container, Row } from "react-bootstrap";
import { LogoReact } from "../../assets/icon";

const About = () => {
	return (
		<div className='mt-5 about-page'>
			<Container>
				<section id='about-me'>
					<div className='d-flex justify-content-center'>
						<img src={Me} alt='Hero' width={250} className='my-photo' />
					</div>
					<Gap height={60} />
					<div className='story-text'>
						<h1>Hey Everyone!👋</h1>
						<p>
							<b> I'm Fadillah Fahrudin, as UI design and Front-End Developer.</b>{" "}
							Youth 25 years old born in Lampung. I graduated from Pamulang University
							majoring in Informatic of technic (2023).
						</p>
						<p>
							I have strong experience in using programming languages such as HTML,
							CSS, JavaScript, and a little basic PHP and I can also work with some
							frameworks that I am good at such as Bootstrap, React JS, React Native,
							and a little understanding of Laravel. I also understand the basic
							concepts of responsive design and interface design.
						</p>
						<p>
							First time I became interested in programming languages when I was in
							Junior High School and at that time I watched a movie titled{" "}
							<b> Who Am I</b> after this I was interested and wanted to be a hacker
							hehe.🤣 So I started to find out how to learn programming language when I
							was a bachelor's degree student at Pamulang University (2017) I chose
							major in informatics of technic and the first language that I knew was
							C++ until the fourth semester I found a YouTube channel{" "}
							<a
								href='https://www.youtube.com/@sandhikagalihWPU'
								target='_blank'
								rel='noreferrer'>
								Web Programming UNPAS
							</a>{" "}
							that provides education regarding basic languages such as HTML CSS PHP
							and Javascript.
						</p>
						<p>
							First project was at that time creating a static web portfolio using HTML
							CSS and javascript. and while studying in 2022, for the first time I
							worked in the web developer section to build a social website the Gerakan
							Infaq Nutrisi, starting from UI design using Figma and then slicing to
							code HTML, CSS, and Javascript. At the time I build this website, I use
							the Laravel framework. But this project has not been resumed until now
							from my office.
						</p>
						<p>
							For my undergraduate finals, I created an Android-based crowdfunding app
							using React Native. Before that I didn't really understand React until I
							found a bootcamp class on{" "}
							<a href='https://buildwithangga.com/' target='_blank' rel='noreferrer'>
								Build with Angga{" "}
							</a>
							regarding creating an Android Food Market application that uses React
							Native for mobile applications and Laravel as a Content Management System
							and I was able to complete this class.
						</p>
						<p>
							I find out about React, read about documents, and always try it in my
							simple project. and I continue my study case to make Android Application
							for my final undergraduate exams and about six months I finished this
							project.🦾⚔️
						</p>
						<p>
							And I like this framework.
							<img src={LogoReact} alt='react' width='30' />
							Base of Component | Learn once, write anywhere.
						</p>
					</div>
				</section>

				<section id='wrapper-CardExperience'>
					<h2 className='text-center'>Work Experience</h2>
					<hr />
					<Row className='justify-content-md-center'>
						<Col l='4'>
							<CardExperience
								jobdesk='Junior Web Developer'
								location='Semangatbantu.com'
								duration='Jan 2022 - Jan 2023'
							/>
						</Col>
						<Col l='4'>
							<CardExperience
								jobdesk='Comunity Network'
								location='Semangatbantu.com'
								duration='Jul 2021 - Dec 2022'
							/>
						</Col>
						<Col xl='4'>
							<CardExperience
								jobdesk='Content Createor & Social Media Specialist'
								location='Laju Peduli'
								duration='Jun 2019 - Dec 2019'
							/>
						</Col>
					</Row>
				</section>
			</Container>
		</div>
	);
};

export default About;
