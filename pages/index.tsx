import Head from 'next/head'
import {BsFillLightbulbFill} from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
  
} from "react-icons/ai";
import deved from "../public/heroImage.jpeg";
import Image from 'next/image';
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';
import Link from 'next/link';
export default function Home() {
  const[dark,setDark]= useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>AruN Portfolio</title>
        <meta name="description" content="App Cr8ted by AruN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
        <nav className='py-8 flex justify-between mb-10 dark:text-white'>
          <h1 className='text-4xl'>React Portfolio</h1>
          <ul className='flex items-center dark:text-white'>
            <li>Theme</li>
            <li className='mr-4'>
              <BsFillLightbulbFill onClick={()=>setDark(!dark)} className='m-2 cursor-pointer  text-xl'/>
            </li>
            <li>
              <a href="/Arun_React_JS.docx" download={true}>Resume</a>     
                    
            </li>
            <li >
              <a href="/Arun_React_JS.docx" download={true}>
              <AiOutlineDownload className='m-1 text-2xl'/>
              </a>
            
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Arunkumar Sharma
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            An Engineer ,Developer & Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A software programmer having more than 9+ years in IT and Banking Industry.
              Worked on technologies like React JS, .NET Developer,SQL Database and Cyber Security
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillGithub />
              <AiFillLinkedin />
              
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 relative overflow-hidden mt-20 md:h-96 md:w-96">
             
             <Image alt="portfolio" src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white  lg:flex justify-center">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200 lg:flex justify-center" >
              I am a software developer by passion having more than 9 years experience in industries like IT and Finance.
            <br></br>Technologies like React JS and Tailwind CSS has been my favourites for
             designing elagant applications and websites.
             <br></br>
             Having worked in IT and Finance industry i bring to table versatility and things i learn along the way.
             <br></br>
             From front-end development like React JS,HTML5 to .NET and developing SECURE application.
            </p>
          
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image alt="portfolio" src={design} width={100} height={100} className='ml-20' />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Projects developed
              </h3>
              <p className="py-2">
                
              </p>
              <h4 className="py-4 text-teal-600">React JS Projects</h4>
              <p className="text-gray-800 py-1">MovieFlix</p>
              <p className="text-gray-800 py-1">Day Planner</p>
              <p className="text-gray-800 py-1">Crypto Tracker</p>
              <p className="text-gray-800 py-1">E commerce website</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="portfolio" src={code} width={100} height={100} className='ml-20' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Technologies i know
              </h3>
              <p className="py-2">
                
              </p>
              <p className="text-gray-800 py-1">React JS</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">ASP.NET</p>
              <p className="text-gray-800 py-1">HTML5</p>
              <p className="text-gray-800 py-1">Microsoft SQL</p>
              <p className="text-gray-800 py-1">Cyber Security</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="portfolio" src={consulting} width={100} height={100} className='ml-20' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Contact Me</h3>
              <p className="py-2">
                Kindly contact me on
              </p>
              <h4 className="py-4 text-teal-600"></h4>
              <p className="text-gray-800 py-1">i88u99@gmail.com</p>
              
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the start of my journey as web developer
              i have developed many projects.

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
               examples
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image alt="portfolio"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt="portfolio"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt="portfolio"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt="portfolio"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt="portfolio"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt="portfolio"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
       </main>

 
    </div>
  )
}
