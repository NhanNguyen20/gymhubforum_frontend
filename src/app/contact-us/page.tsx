import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
    <h2 className="text-lg font-bold mb-4">Contact Us</h2>
    <p className="mb-4">
      We'd love to hear from you! Whether you have questions, feedback, or need support, we're here to help. Feel free to reach out to us using the contact information below or by filling out the contact form on this page.
    </p>

    <h3 className="text-md font-bold mb-2">How to Reach Us</h3>

    <div className="space-y-4">
      <h4 className="font-bold">Email</h4>
      <p>
        For general inquiries, technical support, or any other questions, please email us at:
      </p>
      <p className="font-bold">
        Email: <a href="mailto:support@gymhub.com" className="text-blue-500">support@gymhub.com</a>
      </p>

      <h4 className="font-bold">Mailing Address</h4>
      <p>
        You can also reach us by mail at our physical address:
      </p>
      <p className="font-bold">
        Address: 702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000, Việt Nam
      </p>

      <h4 className="font-bold">Forum Support</h4>
      <p>
        If you're experiencing issues with your account or need help navigating the forum, our support team is ready to assist. Simply send us an email with your username and a brief description of the issue, and we'll get back to you as soon as possible.
      </p>

      <h4 className="font-bold">Social Media</h4>
      <p>
        Connect with us on social media for the latest updates, tips, and community highlights:
      </p>
      <ul className="list-disc list-inside">
        <li><strong>Facebook:</strong> <a href="https://facebook.com/gymhub" className="text-blue-500">facebook.com/gymhub</a></li>
        <li><strong>Instagram:</strong> <a href="https://instagram.com/gymhub" className="text-blue-500">instagram.com/gymhub</a></li>
        <li><strong>Twitter:</strong> <a href="https://twitter.com/gymhub" className="text-blue-500">twitter.com/gymhub</a></li>
      </ul>
    </div>

    <h3 className="text-md font-bold mt-6 mb-4">Contact Form</h3>
    <p className="mb-4">
      Prefer to reach out directly through our website? Just fill out the form below, and we'll respond to your inquiry promptly.
    </p>

    <form className="space-y-4">
      <div>
        <label className="block font-bold mb-2" htmlFor="name">Your Name:</label>
        <input className="w-full p-2 border rounded" type="text" id="name" name="name" placeholder="Enter your name" />
      </div>

      <div>
        <label className="block font-bold mb-2" htmlFor="email">Email Address:</label>
        <input className="w-full p-2 border rounded" type="email" id="email" name="email" placeholder="Enter your email address" />
      </div>

      <div>
        <label className="block font-bold mb-2" htmlFor="subject">Subject:</label>
        <input className="w-full p-2 border rounded" type="text" id="subject" name="subject" placeholder="Enter subject" />
      </div>

      <div>
        <label className="block font-bold mb-2" htmlFor="message">Message:</label>
        <textarea className="w-full p-2 border rounded" id="message" name="message" rows={5} placeholder="Enter your message"></textarea>
      </div>

      <div>
        <button className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600" type="submit">Submit</button>
      </div>
    </form>

    <p className="mt-6">
      We're dedicated to providing the best experience possible for our members. Your feedback helps us improve, and your questions ensure that we're meeting your needs. Don't hesitate to get in touch—we're here to support your fitness journey every step of the way!
    </p>
  </div>

  );
};

export default ContactUsPage;