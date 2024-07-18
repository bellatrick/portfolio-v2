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
        <div className='lg:p-4 p-1 pb-4'>
          <div className=''>
            <p className='font-bold text-lg text-teal-600 pb-2'>My contribution</p>
            <p className=''>{portfolioModal.role}</p>
          </div>
        </div>
        <div className='portfolio_main_title lg:px-6 flex gap-4 justify-between'>
          <Link
            target='_blank'
            rel='noreferrer'
            href={portfolioModal.website}
            className='buttonStyle group w-full'
          >
            <span className='buttonAnimate'></span>

            <span className='relative lg:text-[16px] text-[12px]'>Documentation</span>
          </Link>
          <Link
            href={portfolioModal.github}
            target='_blank'
            rel='noreferrer'
            className='buttonStyle group  w-full'
          >
            <span className='buttonAnimate'></span>

            <span className='relative lg:text-[16px] text-[12px]'>Github</span>
          </Link>
        </div>
      </div>
    </PopContainer>
  );
};
export default ProjectPopup;
