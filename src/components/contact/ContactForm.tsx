"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';

interface ContactFormProps {
  tDict: Record<string, string>;
}

export default function ContactForm({ tDict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    if (!formData.agree) {
      toast.error('Please agree to the privacy policy.');
      return;
    }

    // Construct Mailto Link
    const mailtoLink = `mailto:info@newinvestgroup.ly?subject=${encodeURIComponent(formData.subject || 'New Contact Inquiry')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Show success toast
    toast.success('Message Prepared! Check your email client.', {
      duration: 5000,
      position: 'bottom-center',
      style: {
        background: '#0F2847',
        color: '#fff',
        border: '1px solid #C5A869',
      }
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formName}</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={tDict.formNamePlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0B132B] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A869] focus:border-transparent transition-all dark:text-white placeholder-gray-400" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formEmail}</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={tDict.formEmailPlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0B132B] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A869] focus:border-transparent transition-all dark:text-white placeholder-gray-400" 
            required 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formPhone}</label>
          <input 
            type="text" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={tDict.formPhonePlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0B132B] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A869] focus:border-transparent transition-all dark:text-white placeholder-gray-400" 
            dir="ltr" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formSubject}</label>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={tDict.formSubjectPlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0B132B] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A869] focus:border-transparent transition-all dark:text-white placeholder-gray-400" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formMessage}</label>
        <textarea 
          name="message"
          rows={5} 
          value={formData.message}
          onChange={handleChange}
          placeholder={tDict.formMessagePlaceholder} 
          className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0B132B] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A869] focus:border-transparent transition-all dark:text-white resize-none placeholder-gray-400"
          required
        ></textarea>
      </div>

      <div className="flex items-start gap-3 mt-4">
        <input 
          type="checkbox" 
          name="agree"
          id="agreeTerms" 
          checked={formData.agree}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-[#C5A869] bg-gray-100 border-gray-300 rounded focus:ring-[#C5A869] dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        />
        <label htmlFor="agreeTerms" className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer select-none leading-relaxed">
          {tDict.formAgreeCheck}
        </label>
      </div>

      <button type="submit" className="bg-[#C5A869] hover:bg-[#0F2847] text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-auto min-w-[200px] mt-6">
        {tDict.send}
      </button>
    </form>
  );
}
