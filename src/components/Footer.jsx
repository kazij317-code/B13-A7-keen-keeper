import React from 'react';
import imageInstagram from '../assets/instagram.png'
import imageFacebook from '../assets/facebook.png';
import imageTwitter from '../assets/twitter.png';
import imageLogo from '../assets/logo-xl.png';

const Footer = () => {

  return (
    <div className="bg-green-900 text-white text-center p-8 mt-10">
      <div className="p-6 max-w-7xl mx-auto">
        
      <img src={imageLogo} alt="logo" className="w-103 h-15 mx-auto"/>
      <p className="text-[16px] mt-2">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <div>
        <h3 className="text-white font-medium mb-3 mt-6 text-[20px]">Social Links</h3>
        <div className="flex justify-center gap-4">

          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
           
            <img
              src={imageInstagram}
              alt="instagram"
              className="w-10 h-10"
            />
          </a>

          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
            
            <img
              src={imageFacebook}
              alt="facebook"
              className="w-10 h-10"
            />

          </a>

          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
          
            <img
              src={imageTwitter}
              alt="twitter"
              className="w-10 h-10"
            />
          </a>

        </div>
      </div>

      <div className="mt-6 pt-8 border-t border-gray-500 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className='text-[16px]'> © 2026 KeenKeeper. All rights reserved..</p>
        <div className="text-[16px] flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
      </div>
      
  );
};

export default Footer;