'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  // Auto-focus first field on load
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const validateField = (name, value) => {
    if (name === 'name' && !value.trim()) return true;
    if (name === 'subject' && !value.trim()) return true;
    if (name === 'message' && !value.trim()) return true;
    if (name === 'email') {
      if (!value.trim()) return true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return true;
    }
    return false;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = true;
    }
    if (!formData.subject.trim()) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);

    // Focus first invalid field
    if (newErrors.name && nameRef.current) nameRef.current.focus();
    else if (newErrors.email && emailRef.current) emailRef.current.focus();
    else if (newErrors.subject && subjectRef.current) subjectRef.current.focus();
    else if (newErrors.message && messageRef.current) messageRef.current.focus();

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const hasError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: hasError }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return !Object.values(errors).some(error => error) &&
      Object.keys(formData).every(key => formData[key].trim() !== '');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <div className="max-w-2xl mx-auto bg-gray-900/30 p-6 rounded-lg border border-white/10">
        <p className="mb-6 text-gray-300">
          Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
        </p>

        {status.message && (
          <div className={`p-4 mb-6 rounded-md ${status.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 bg-gray-800 border rounded-md text-white transition-colors ${touched.name && errors.name ? 'border-red-500' : 'border-gray-700'}`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 bg-gray-800 border rounded-md text-white transition-colors ${touched.email && errors.email ? 'border-red-500' : 'border-gray-700'}`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
            <input
              ref={subjectRef}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 bg-gray-800 border rounded-md text-white transition-colors ${touched.subject && errors.subject ? 'border-red-500' : 'border-gray-700'}`}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              ref={messageRef}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="5"
              className={`w-full p-3 bg-gray-800 border rounded-md text-white transition-colors ${touched.message && errors.message ? 'border-red-500' : 'border-gray-700'}`}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            className={`px-6 py-3 text-white font-medium rounded-md transition-colors w-full flex justify-center items-center ${isFormValid()
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-green-600/50 cursor-not-allowed'
              }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
