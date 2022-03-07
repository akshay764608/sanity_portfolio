import React from 'react';
import { BsTwitter, BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/akshay-kumar-863284187/'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/aksuu_akshay/?hl=en'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://github.com/akshay764608'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://twitter.com/AkshayK77046614'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/profile.php?id=100009040802721'>
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
