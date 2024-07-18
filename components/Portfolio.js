'use client';

import Image from 'next/image';
import '../@/styles/card.scss';
import { navigate } from 'next/navigation';
import Link from 'next/link';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      link: 'portfolio/software-dev',
      title: 'Software Development',
      img: '/img/portfolio/form1.png',
      shapImage: 'img/portfolio/form1.png',
      client: 'Personal',
      category: 'Fullstack',
      date: 'April 8, 2024',
      detailsImgs: [
        { id: 1, src: 'img/portfolio/form1.png' },
        { id: 2, src: 'img/portfolio/form2.png' }
      ]
    },
    {
      id: 3,
      link: 'portfolio/technical-writing',
      title: 'Technical writing',
      img: '/img/portfolio/twilio1.png',
      shapImage: 'img/portfolio/twilio1.png',
      client: 'Twilio',
      category: 'Technology',
      date: 'April 17, 2024',
      detailsImgs: [{ id: 1, src: 'img/portfolio/twilio1.png' }]
    }
  ];

  return (
    <div className=' bg-apply px-20 '>
      <div className=' mt-[300px]'>
        {' '}
        <p className='font-bold text-[40px] leading-[120px]'>Projects</p>
      </div>{' '}
      <div className='wrap  py-10 pb-10  relative flex gap-[40px] justify-center sm:justify-start flex-wrap mb-6'>
        {projects.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className='card items-center flex flex-col border rounded-lg border-primary'
          >
            <Link  href={item.link} className='h-[400px] w-[500px]'>
              <Image
                src={item.img}
                alt=''
                className='h-full w-full object-cover rounded-t-lg'
                width={600}
                height={500}
              />
            </Link>
            <div className=' flex-1 flex flex-col  relative z-10 rounded-b-lg text-white'>
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
