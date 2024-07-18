'use client';
import React from 'react';
import JaraLayout from '../../../layouts/JaraLayout';
import Image from 'next/image';
import '../../../@/styles/card.scss';
import Link from 'next/link';

const SoftwareDev = () => {
  const projects = [
    {
      name: 'BuildBoxed',
      img: '/img/portfolio/1.png',
      stack: ['Next.Js', 'Typescript', 'Tailwind', 'Shadcn', 'Prisma'],
      description:
        "BuildBox is a SaaS application designed to streamline your agency's workflows, automate repetitive tasks, and enhance collaboration among your team members. Some of it's features include a drag & drop task manager, a website builder and a media bucket.",
      github: 'https://github.com/bellatriicks/web_builder',
      website: 'https://buildboxed.vercel.app/'
    },
    {
      name: 'MakeForm',
      img: '/img/portfolio/form2.png',
      stack: ['Next.Js', 'Tailwind', 'Shadcn', 'Prisma', 'MySQL'],
      description:
        'This is a fullstack application that uses drag and drop functionality to create a form builder and an analytics dashboard to track form replies, visits and bounce rate.',
      github: 'https://github.com/bellatrick/form_builder',
      website: 'https://makeformbuilder.vercel.app/'
    },
    {
      name: 'Bookhub',
      img: '/img/portfolio/bookhub.png',
      description:
        'This is a fullstack MERN application that allow users to sign into the application and book hotels and make payment. Admin Users are allowed to list hotels publicly and recieve payment from users',
      stack: ['React', 'NodeJS', 'MongoDB', 'Redux', 'Tailwind'],
      github: 'https://github.com/bellatrick/hotel_booking_app/tree/main',
      website: 'https://hotel-booking-app-hy7t.onrender.com/'
    },
    {
      name: 'Twitter Clone',
      img: '/img/portfolio/twitterclone.png',
      description:
        "This simple application aims to imitate Twitter's most basic functionalities which include tweeting, commenting, liking and retweeting. The authentication and CRUD operations were made using Firebase.",
      stack: ['NextJS', 'Recoil', 'Firebase'],
      github: 'https://google.com',
      website: 'https://twitter-clone-seven-olive.vercel.app/'
    },
    {
      name: 'Socials',
      img: '/img/portfolio/socials.png',
      description:
        'This is a social media app that allows users to get authenticated, and share posts with friends',
      stack: ['React', 'NodeJS', 'GraphQL', 'Redux', 'Material UI'],
      github: 'https://github.com/bellatrick/merng-client',
      website: 'https://belladevsocials.netlify.app/'
    }
  ];
  return (
    <JaraLayout>
      <div className='bg-apply  py-40 px-4 lg:px-20'>
        <div className='flex mx-auto w-full flex-col gap-4 lg:flex-row items-center lg:justify-between py-4'>
          <p className='lg:text-[32px] text-[20px] font-bold'>Web development Projects</p>
          <p className='hover:underline text-[14px] font-semibold text-teal-600'>
            <Link className='underline' href={'/portfolio/technical-writing'}>
              Go to technical writing projects
            </Link>
          </p>
        </div>{' '}
        <div className='relative flex gap-[20px]  w-full justify-center xl:justify-start  flex-wrap'>
          {projects.map((item, i) => (
            <div
              key={i}
              className='card flex  flex-col w-[380px] border rounded-lg border-primary'
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
              <div className='bg-teal-800 flex-1 flex flex-col  relative z-10 rounded-b-lg text-white'>
                {' '}
                <div className='p-2 text-sm flex justify-center'>
                  <ul className=' flex w-fit  flex-wrap gap-x-[30px] gap-y-2'>
                    {item.stack.map((stack, i) => (
                      <li className='text-wrap' key={i}><span className='text-[30px] font-bold'>.</span>{stack}</li>
                    ))}
                  </ul>

                </div>
                <hr className='h-1 border-cyan-500 w-full'/>
                <div className='p-2 text-[14px] '>
                  <p>{item.description}</p>
                </div>
                <div className='flex items-end flex-1 align-bottom  justify-between text-xs px-4 mt-2 pb-2'>
                  {item.github && (
                    <a
                      href={item.github}
                      target='_blank'
                      rel='noreferrer'
                      className='text-[15px] hover:underline hover:text-gray-300'
                    >
                      Github
                    </a>
                  )}
                  <a
                    href={item.website}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:underline text-[15px] hover:text-gray-300'
                  >
                    Visit website
                  </a>
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
