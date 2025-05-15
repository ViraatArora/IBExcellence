
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">IB Excellence</h3>
          <p className="text-gray-400 mb-4">Premium Math & Science Instruction</p>
          
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
