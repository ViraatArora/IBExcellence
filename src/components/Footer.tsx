
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">IB Excellence</h3>
          <p className="text-gray-400 mb-4">Premium Math & Science Instruction</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>&copy; {currentYear} IB Excellence. All rights reserved.</p>
            <p className="mt-1">Specializing in IB Mathematics and Science tutoring.</p>
          </div>
          
          <div className="mt-4">
            <ul className="flex justify-center space-x-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="mt-6 text-xs text-gray-600">
            <p>
              Local Development: <code>npm run dev</code><br/>
              Host with <a href="https://pages.github.com/" className="text-tutor-blue hover:underline">GitHub Pages</a>,&nbsp;
              <a href="https://www.netlify.com/" className="text-tutor-blue hover:underline">Netlify</a>, or&nbsp;
              <a href="https://vercel.com/" className="text-tutor-blue hover:underline">Vercel</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
