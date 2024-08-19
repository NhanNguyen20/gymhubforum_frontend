import React from 'react';
import pageLogo from '~/images/logo.webp'

const HelpPage = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
      <h2 className="text-lg font-bold mb-4">Welcome to GymHub Help Center</h2>
      <p className="mb-4">
        Welcome to GymHub, the go-to forum for fitness enthusiasts, gym-goers, and anyone passionate about health and wellness! This help post is designed to guide you through the key features of GymHub and answer any questions you might have. Whether you’re new to the forum or just need a refresher, you’ll find everything you need to get the most out of our community right here.
      </p>

      <div className="space-y-4">
        <h3 className="font-bold">Getting Started</h3>
        <h4 className="font-bold ml-4">1. Creating an Account</h4>
        <ul className="list-disc list-inside pl-8">
          <li>Sign Up: Click on the "Sign Up" button at the top right of the homepage.</li>
          <li>Fill Out Your Information: Provide your username, email, and password. You can also fill out your profile with additional details like your fitness goals, location, and profile picture.</li>
          <li>Verify Your Email: You’ll receive a confirmation email. Click on the link to verify your email address and complete the registration process.</li>
        </ul>

        <h4 className="font-bold ml-4">2. Navigating the Forum</h4>
        <ul className="list-disc list-inside pl-8">
          <li>Categories: GymHub is organized into various categories like Workout Routines, Nutrition, Gear Reviews, and more. Choose the category that best fits your interest.</li>
          <li>Search Function: Use the search bar at the top of the page to find specific topics or posts.</li>
          <li>Latest and Trending: Check out the "Latest" and "Trending" tabs to see the newest discussions and what’s popular in the community.</li>
        </ul>

        <h4 className="font-bold ml-4">3. Participating in Discussions</h4>
        <ul className="list-disc list-inside pl-8">
          <li>Starting a New Thread: To start a new discussion, go to the relevant category and click the "New Thread" button. Be sure to give your thread a clear title and provide as much detail as possible in your post.</li>
          <li>Replying to Posts: To reply to an existing thread, simply scroll to the bottom of the post and type your response in the reply box. You can also quote specific comments by clicking the "Quote" button.</li>
          <li>Liking and Following: If you find a post helpful or interesting, click the "Like" button. You can also follow a thread to receive notifications of new replies.</li>
        </ul>

        <h4 className="font-bold ml-4">4. Managing Your Profile</h4>
        <ul className="list-disc list-inside pl-8">
          <li>Profile Settings: Click on your username at the top right corner of the page and select "Profile". Here, you can edit your personal information, change your password, and update your profile picture.</li>
          <li>Privacy Settings: Control who can see your profile details and posts by adjusting your privacy settings.</li>
          <li>Notification Preferences: Choose how and when you want to be notified about replies, likes, and other activities on GymHub.</li>
        </ul>

        <h3 className="font-bold">Common Questions</h3>
        <ul className="list-disc list-inside pl-8">
          <li><strong>How do I reset my password?</strong> If you’ve forgotten your password, click on the "Forgot Password?" link on the login page. Enter your email address, and we’ll send you instructions on how to reset your password.</li>
          <li><strong>How do I report a post?</strong> If you come across a post that violates our community guidelines, click on the "Report" button located at the bottom of the post. Choose the reason for reporting, and our moderation team will review the post.</li>
          <li><strong>How do I contact support?</strong> If you need help that’s not covered in this guide, you can contact our support team by emailing <a href="mailto:support@gymhub.com" className="text-blue-500">support@gymhub.com</a>. We’re here to assist you with any questions or issues you may have.</li>
          <li><strong>Can I delete my account?</strong> If you wish to delete your account, please contact our support team. Be aware that deleting your account is permanent, and all your posts and data will be removed from the forum.</li>
        </ul>

        <h3 className="font-bold">Tips for a Great GymHub Experience</h3>
        <ul className="list-disc list-inside pl-8">
          <li><strong>Be Respectful:</strong> GymHub is a community for everyone, regardless of their fitness level. Be respectful and supportive in your interactions.</li>
          <li><strong>Stay On-Topic:</strong> Make sure your posts and replies are relevant to the category or discussion at hand.</li>
          <li><strong>Share Your Knowledge:</strong> Don’t hesitate to share your experiences, tips, and advice. The more you contribute, the more valuable the community becomes for everyone.</li>
          <li><strong>Explore and Engage:</strong> Take time to explore different sections of the forum and engage with other members. You never know what new insights or friends you might find!</li>
        </ul>

        <h3 className="font-bold">Conclusion</h3>
        <p>
          We’re thrilled to have you as part of the GymHub community! Whether you’re here to share your expertise, seek advice, or simply connect with like-minded individuals, we’re confident you’ll find GymHub to be a valuable resource. If you have any more questions or need further assistance, don’t hesitate to reach out to our support team.
        </p>
        <p className="mt-4 font-bold">Happy lifting, and welcome to GymHub!</p>
      </div>
    </div>

  );
};

export default HelpPage;