import React from 'react';

export default function About() {
    return (
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, My name is Surbhi
                    </h1>
                    <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                        I have a passion for crafting stunning websites that captivate and inspire
                    </h2>
                    <p className="mb-8 leading-relaxed">
                    • As a Full Stack Software Developer with over 3 years of professional experience, I bring a comprehensive skill set encompassing C#, .Net, TypeScript, JavaScript, PostgreSQL, MySQL Server, Laravel, Shopify, and React.js. My expertise spans diverse industries including Telematics, Real Estate, Job Portals, and E-commerce.
                    <br/>
                    • With hands-on experience in cloud computing, blockchain technology, and web development, I excel in project deployment on AWS and am proficient in both Windows and Ubuntu (Linux) operating systems.
                    <br/>
                    • My adept communication skills, honed through Stake holder interactions, empower me to contribute confidently to daily stand-up meetings and provide project updates in a team environment. I am passionate about embracing new opportunities and applying my expertise to novel ventures.
                    <br/>
                    • Feel free to connect with me on LinkedIn or via email to explore how I can leverage my considerable experience to benefit your projects.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Past Work
                        </a>
                    </div>
                    </div>
                    <div className="lg:max-w-lg md:w-1/2 w-3/6">
                        <img
                            className="object-cover object-center Square"
                            alt="hero"
                            src="./assets/Surbhi.png"
                        />
                    </div>
                </div>
            </section>
            );
}