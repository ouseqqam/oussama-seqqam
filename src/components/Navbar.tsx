import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-end py-6'>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        {/* LinkedIn Link */}
        <a href='https://www.linkedin.com/in/oussama-seqqam' target='_blank' rel='noopener noreferrer'>
          <FaLinkedinIn />
        </a>
        {/* GitHub Link */}
        <a href='https://github.com/ouseqqam' target='_blank' rel='noopener noreferrer'>
          <FiGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
