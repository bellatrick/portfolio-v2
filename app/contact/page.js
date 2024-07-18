'use client';

import React, { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '../../@/components/ui/use-toast';
import JaraLayout from '../../layouts/JaraLayout';
import '../../@/styles/card.scss';
import { context } from '../../context/context';

const Contact = () => {
  const { toast } = useToast();
  const form = useRef();
  const [loading, setloading] = useState(false);
  const { modalToggle,setBlogModal } = useContext(context);
  const sendEmail = (e) => {
    setloading(true);
    e.preventDefault();
    modalToggle(true)

    emailjs
      .sendForm(
        'service_52ad1gr',
        'template_e36it6c',
        form.current,
        'b7iLV2gkkyawKu3zs'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          modalToggle(true);
          setBlogModal({name:"hello"})
          setloading(false);
        },
        (error) => {
          console.log(error.text);
          form.reset();
          toast.error(error.text);
          setloading(false);
        }
      );
  };

  return (
    <JaraLayout>
      <div className=' bg-apply h-screen w-screen  justify-center items-center  mb-[40px]  flex gap-4 mx-auto flex-col gray px-6'>
        <div className='w-full'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex w-[60%] mx-auto  items-center  justify-center bg-teal-900 gap-6 flex-col border-green-500 border-2 mt-16 rounded-lg p-4'
          >
            <p className='text-white font-bold text-[30px] mb-4'>
              Let's talk
            </p>
            <div className='w-[80%] mx-auto'>
              <label className='font-bold text-white my-1  ' htmlFor='name'>
                Name
              </label>
              <input
                className='border block rounded-md  dark:text-gray-700   py-2 pl-4 border-green-600 outline-none  w-full'
                type='text'
                placeholder='Please enter your name'
                name='from_name'
                required
              />
            </div>
            <div className='w-[80%] mx-auto'>
              <label className='font-bold text-white my-1  ' htmlFor='email'>
                Email address
              </label>
              <input
                className='border block rounded-md  dark:text-gray-700   py-2 pl-4 border-green-600 outline-none  w-full'
                type='email'
                placeholder='Please enter your email address'
                name='email'
                required
              />
            </div>
            <div className='w-[80%] mx-auto'>
              <label className='font-bold my-1 text-white  ' htmlFor='email'>
                Message
              </label>
              <textarea
                className='border block rounded-md dark:text-gray-700   py-2 pl-4 border-green-600 outline-none  w-full '
                type='text'
                placeholder='Enter your message ...'
                rows={5}
                name='message'
                required
              />
            </div>
            <div>
              <button className='buttonStyle group max-w-[400px] w-full'>
                <span className='buttonAnimate'></span>
                {loading ? (
                  <span className='relative animate-pulse'>Sending...</span>
                ) : (
                  <span className='relative'>Shoot</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </JaraLayout>
  );
};

export default Contact;
