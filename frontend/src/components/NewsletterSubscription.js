import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const NewsletterSubscription = ({ className = "" }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/newsletter/subscribe`, { email });
      
      if (response.data.success) {
        toast({
          title: "Subscribed!",
          description: response.data.message,
          variant: "default",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      
      let errorMessage = "Failed to subscribe. Please try again.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        disabled={isSubmitting}
        className="flex-1 bg-[#302f2c] border border-[#3f4816] rounded-full px-6 py-3 text-[#d9fb06] placeholder-[#888680] focus:outline-none focus:border-[#d9fb06] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button 
        type="submit"
        disabled={isSubmitting}
        className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:scale-105 hover:opacity-90 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default NewsletterSubscription;