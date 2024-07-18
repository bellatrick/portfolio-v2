'use client';
import React, { useContext, useState } from 'react';
import JaraLayout from '../../../layouts/JaraLayout';
import Image from 'next/image';
import '../../../@/styles/card.scss';
import Link from 'next/link';
import { context } from '../../../context/context';

const SoftwareDev = () => {
  const { modalToggle,setPortfolioModal } = useContext(context);
  const handleClick = (folio) => {
    modalToggle(true);
    setPortfolioModal(folio)
  };
  const projects = [
    {
      img: '/img/portfolio/picturedoc.png',
      description:
        'Picture is a useful Swift Package Manager project that simplifies the process of displaying multiple images in SwiftUI.  ',
      role: 'I added documentation for all public APIs throughout the project. This project was compiled using DocC and hosted using github pages.',
      github:
        'https://github.com/0xOpenBytes/Picture/commit/ffba262c14a1d1aec5d46c4084e9782021bc39a8',
      website: 'https://0xopenbytes.github.io/Picture/documentation/picture'
    },
    {
      img: '/img/portfolio/pterodactyl.png',
      description:
        'Pterodactyl is a free, open-source game server management panel built with PHP, React, and Go. ',
      role: 'I performed an update of the Pterodactyl legacy documentation, aligning it with recent codebase changes. This involved a thorough revision previous API endpoints and the addition of new endpoints into the documentation.',
      github: 'https://github.com/devnote-dev/ptero-notes/pull/20/commits',
      website: 'https://dashflo.net/docs/api/pterodactyl/v1/'
    },
    {
      img: '/img/portfolio/piscina.png',
      description:
        'Piscina is an open source project built with typescript focused on the correct usage of Worker threads in Node.js. The project is sponsored by NearForm Research.  ',
      role: "I spearheaded the development of a documentation site using Docusaurus. The site has over 40 pages of user guides, including API reference documentation. To further support developers, I included more than 20 example sections to illustrate Piscina's integration capabilities. Each code example in the documentation was written in both JavaScript and TypeScript",

      github: 'https://github.com/piscinajs/piscina/pull/591/commits',
      website: 'https://github.com/piscinajs/piscina/pull/591/commits'
    },
    {
      img: '/img/portfolio/builddoc.png',
      description:
        'BuildBox is a Saas application created to streamline agency processes and ensure easier collaboration between clients and agencies. ',
      role: " I wrote quick start tutorials and in-depth user guides for each feature of the application, to ensure a smooth onboarding experience for all user types. This documentation is a user guide that caters to both individual users and agency accounts at BuildBox.",

      github: 'https://github.com/bellatriicks/web_builder',
      website: 'https://busayo.gitbook.io/buildbox-documentation'
    },
    {
      img: '/img/portfolio/rsam.png',
      description:
        'Bioconductor is an opensource project that aims to develop and share open source software for precise and repeatable analysis of biological data. ',
      role: 'I migrated the existing documentation from Sweave to R Markdown. This transition was needed in order to transform the documentation from PDF to HTML format.',

      github: 'https://github.com/Bioconductor/Rsamtools/pull/53/commits',
      website:
        'https://bioconductor.org/packages/release/bioc/vignettes/Rsamtools/inst/doc/Rsamtools-Overview.html'
    }
  ];
  return (
    <JaraLayout>
      <div className='bg-apply  py-40 px-20'>
        <div className='flex mx-auto w-full flex-col gap-4 lg:flex-row items-center lg:justify-between py-4'>
          <p className='lg:text-[32px] text-[20px] font-bold '>Technical Writing Projects</p>
          <p className='hover:underline text-[14px] font-semibold underline text-teal-600'>
            <Link href={'/portfolio/software-dev'}>
              Go to web development projects
            </Link>
          </p>
        </div>{' '}
        <div className='relative flex gap-[20px] mx-auto w-full justify-center xl:justify-start  flex-wrap'>
          {projects.map((item, i) => (
            <div
              key={i}
              className='card flex flex-col w-[380px] border rounded-lg border-primary'
            >
              <div className='h-[220px] w-full'>
                <Image
                  src={item.img}
                  alt=''
                  className='h-full w-full object-cover rounded-t-lg'
                  width={380}
                  height={180}
                />
              </div>
              <div className='bg-teal-800 flex-1 flex flex-col  relative rounded-b-lg text-white'>
                <div className='p-2 text-[14px] '>
                  <p>{item.description}</p>
                </div>
                <div onClick={()=>handleClick(item)} className='flex items-end flex-1 align-bottom  justify-between text-xs px-4 mt-2 pb-2'>
                  <p className='hover:underline cursor-pointer text-[15px] hover:text-gray-300'>
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </JaraLayout>
  );
};

export default SoftwareDev;
