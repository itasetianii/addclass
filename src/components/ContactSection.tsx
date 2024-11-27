'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_GMAIL}&su=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(
      formData.email
    )}%0AMessage:%20${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full flex flex-col space-y-10 justify-center items-center container" id="contact">
      <h2 className="text-center uppercase font-medium text-[var(--primary-color)] text-5xl">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-7 mx-auto w-full md:w-[70%]">
        <div className="w-full grid grid-cols-12 bg-[var(--primary-color)] items-center p-3">
          <label htmlFor="name" className="col-span-12  md:col-span-3">
            <span className="text-2xl md:text-3xl uppercase text-white font-medium">Your Name</span>
          </label>
          <input type="text" id="name" name="name" className="col-span-12 md:col-span-9 bg-white w-full border-none outline-none text-xl" placeholder="e.g Joe Biden" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="w-full grid grid-cols-12 bg-[var(--primary-color)] items-center p-3">
          <label htmlFor="email" className="col-span-12  md:col-span-3">
            <span className="text-2xl md:text-3xl uppercase text-white font-medium">Your Email</span>
          </label>
          <input type="email" id="email" name="email" className="col-span-12 md:col-span-9 bg-white w-full border-none outline-none text-xl" placeholder="e.g joe.biden@example.com" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="w-full grid grid-cols-12 bg-[var(--primary-color)] items-start p-3">
          <label htmlFor="message" className="col-span-12  md:col-span-3">
            <span className="text-2xl md:text-3xl uppercase text-white font-medium">Message</span>
          </label>
          <textarea id="message" name="message" rows={5} className="col-span-12 md:col-span-9 bg-white w-full text-xl p-2 outline-none" placeholder="Your message here..." value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="bg-[var(--primary-color)] text-white uppercase text-2xl font-medium py-2 px-5 w-full md:w-fit mx-auto">
          Send Message
        </button>
      </form>
    </section>
  );
}
