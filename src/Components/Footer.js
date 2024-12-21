import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerData = {
    company: {
      title: 'Company',
      links: [
        'About us',
        'Contact us',
        'Careers'
      ]
    },
    businessSize: {
      title: 'Business Size',
      links: [
        'Entrepreneurs',
        'SMBs',
        'Growth Bussiness',
        'Household Services',
        'Enterprise'
      ]
    },
    businessType: {
      title: 'Business Type',
      links: [
        'Health & Wellness',
        'Sports',
        'Learning Activites',
        'Household Services',
        'Miscellaneous'
      ]
    },
    download: {
      title: 'Download',
      links: [
        { name: 'Bussiness App', icon: '🍎' },
        { name: 'Business App', icon: '▶️' },
        { name: 'User App', icon: '🍎' },
        { name: 'User App', icon: '▶️' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Terms & Conditions',
        'Return Policy'
      ]
    },
    contact: {
      title: 'Contact us',
      links: [
        'support@Rmax.com',
        '+91-8459671235'
      ]
    }
  };

  return (
    <footer className="w-full bg-[#1E1E1E] text-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
          {/* Company */}
          <div>
            <h3 className="text-gray-400 mb-6">{footerData.company.title}</h3>
            <ul className="space-y-4">
              {footerData.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-gray-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Size */}
          <div>
            <h3 className="text-gray-400 mb-6">{footerData.businessSize.title}</h3>
            <ul className="space-y-4">
              {footerData.businessSize.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-gray-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Type */}
          <div>
            <h3 className="text-gray-400 mb-6">{footerData.businessType.title}</h3>
            <ul className="space-y-4">
              {footerData.businessType.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-gray-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-gray-400 mb-6">{footerData.download.title}</h3>
            <ul className="space-y-4">
              {footerData.download.links.map((link) => (
                <li key={link.name}>
                  <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-400 mb-6">{footerData.legal.title}</h3>
            <ul className="space-y-4">
              {footerData.legal.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-gray-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-400 mb-6">{footerData.contact.title}</h3>
            <ul className="space-y-4">
              {footerData.contact.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-gray-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-800">
          <p className="text-gray-400 mb-6 md:mb-0">
            © 2024 Copyright, All Right Reserved@RMax
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;