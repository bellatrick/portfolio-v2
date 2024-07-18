import { useContext } from 'react';
import PopContainer from './PopupContainer';
import { context } from '../../context/context';
const BlogPopup = () => {
  const { setBlogModal } = useContext(context);
  return (
    <PopContainer nullValue={setBlogModal}>
      <div className='news_popup_informations'>
      <div className='flex w-full items-center justify-center'><img className="" src="img/about/mymoji2.png" alt="" /></div>
        <div className='text'>
          <p className='text-[20px] font-bold text-center pt-6'>
            Thank you so much for reaching out. Your mail has been sent
            successfully!
          </p>
        </div>
      </div>
    </PopContainer>
  );
};
export default BlogPopup;
