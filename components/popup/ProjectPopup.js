'use client';
import { context } from '../../context/context';
import { useContext } from 'react';
import PopContainer from './PopupContainer';
import Link from 'next/link';
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal } = useContext(context);
  return (
    <PopContainer nullValue={setPortfolioModal}>
      <div className='popup_details '>
        <div className='top_image'>
          <img src={portfolioModal.img} alt='' />
          <div className='main' data-img-url={portfolioModal.img} />
        </div>
        <div className='p-4 pb-4'>
          <div className=''>
            <p className='font-bold text-lg text-teal-600 pb-2'>My contribution</p>
            <p className=''>{portfolioModal.role}</p>
          </div>
        </div>
        <div className='portfolio_main_title px-6 flex justify-between'>
          <Link
            target='_blank'
            rel='noreferrer'
            href={portfolioModal.website}
            className='buttonStyle group max-w-[200px] w-full'
          >
            <span className='buttonAnimate'></span>

            <span className='relative'>Documentation</span>
          </Link>
          <Link
            href={portfolioModal.github}
            target='_blank'
            rel='noreferrer'
            className='buttonStyle group max-w-[200px] w-full'
          >
            <span className='buttonAnimate'></span>

            <span className='relative'>Github</span>
          </Link>
        </div>
      </div>
    </PopContainer>
  );
};
export default ProjectPopup;
