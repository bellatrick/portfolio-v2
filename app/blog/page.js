'use client';

import Link from 'next/link';
import JaraLayout from '../../layouts/JaraLayout';

const Page = () => {
  const blogs = [
    {
      id: 1,
      img: 'img/portfolio/twilio_blog1.png',
      title:
        'Building a Multilingual Email Application with Sendgrid and Amazon Translate',
      date: 'Jul 12, 2024',
      website:
        'https://www.twilio.com/en-us/blog/building-multilingual-email-app-sendgrid-amazon-translate',
      blog: 'Twilio'
    },
    {
      id: 2,
      img: 'img/portfolio/twilio_blog2.png',
      title:
        'Analyzing Customer Sentiment with Twilio Voice, Functions, and Deepgram AI',
      date: 'Apr 17, 2024',

      website:
        'https://www.twilio.com/en-us/blog/analyzing-customer-sentiment-twilio-voice-functions-deepgram-ai',
      blog: 'Twilio'
    },
    {
      id: 3,
      img: 'img/portfolio/twilio_blog3.png',
      title: 'Build an Auto-Translating Chat App with Twilio WhatsApp',
      date: 'Oct 16, 2023',

      website:
        'https://www.twilio.com/en-us/blog/auto-translating-chat-app-twilio-whatsapp',
      blog: 'Twilio'
    },
    {
      id: 4,
      img: 'img/portfolio/Bejamas.png',
      title: 'Exploring The Intersection of Artificial Intelligence and Modern Web Technology',
      date: 'Sept 08, 2023',

      website:
        'https://bejamas.io/hub/guides/artificial-intelligence-and-modern-web-technology',
      blog: 'Bejamas'
    }
  ];

  return (
    <JaraLayout>
      <div className='jara_tm_blog_page'>
        <div className='jara_tm_news'>
          <div className='container'>
            <div className='news_inner'>
              <div className=' w-full flex justify-between'>
                <h3 className='font-bold text-[32px]'>Recent Blog</h3>
                <div>
                  {' '}
                  <Link
                    href='https://dev.to/bellatrick/'
                    target='_blank'
                    rel='noreferrer'
                    className='buttonStyle group max-w-[200px] w-full'
                  >
                    <span className='buttonAnimate'></span>

                    <span className='relative'>Read more articles</span>
                  </Link>
                </div>
              </div>
              <div className='list'>
                <ul>
                  {blogs.map((blog) => (
                    <li key={blog.id}>
                      <Link
                        href={blog.website}
                        target='_blank'
                        rel='noreferrer'
                        className='list_inner'
                      >
                        <div className='image'>
                          <img src='img/thumbs/57-32.jpg' alt='' />
                          <div className='main' data-img-url={blog.img} />
                          <div className='jara_tm_full_link' />
                        </div>
                        <div className='details'>
                          <span className='date'>{blog.date}</span>
                          <p>{blog.blog}</p>
                          <h3 className='title'>
                            <a
                              href={blog.website}
                              target='_blank'
                              rel='noreferrer'
                              className='text_hover_gradient'
                            >
                              {blog.title}
                            </a>
                          </h3>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </JaraLayout>
  );
};
export default Page;
