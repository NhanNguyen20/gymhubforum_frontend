import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
  <h2 className="text-lg font-bold mb-4">Information We Collect</h2>

  <div className="space-y-4">
    <h3 className="font-bold">1. Personal Information</h3>
    <p>
      When you register on our forum, we collect certain personal information, including but not limited to:
    </p>
    <ul className="list-disc list-inside">
      <li><strong>Username:</strong> A unique identifier chosen by you for participation in the forum.</li>
      <li><strong>Email Address:</strong> Used for account verification, notifications, and communication purposes.</li>
      <li><strong>Password:</strong> Encrypted and securely stored to protect your account.</li>
      <li><strong>Profile Information:</strong> Optional information you may provide, such as age, gender, location, and fitness goals.</li>
    </ul>
    
    <h3 className="font-bold">2. Automatically Collected Information</h3>
    <p>
      When you access the forum, we may automatically collect certain information, including:
    </p>
    <ul className="list-disc list-inside">
      <li><strong>IP Address:</strong> Helps in detecting unauthorized access and managing site security.</li>
      <li><strong>Browser Type and Version:</strong> Used to optimize your browsing experience.</li>
      <li><strong>Operating System:</strong> Helps in providing the best user experience tailored to your device.</li>
      <li><strong>Usage Data:</strong> Includes the pages you visit, the time spent on those pages, and other statistics.</li>
    </ul>

    <h3 className="font-bold">3. Cookies and Tracking Technologies</h3>
    <p>
      Our forum uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us remember your preferences and provide a more personalized experience.
    </p>
    <ul className="list-disc list-inside">
      <li><strong>Session Cookies:</strong> Temporary cookies that remain on your device until you close your browser.</li>
      <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until deleted.</li>
      <li><strong>Tracking Pixels:</strong> Small image files that help track user engagement with specific content.</li>
    </ul>
  </div>

  <h2 className="text-lg font-bold mt-6 mb-4">How We Use Your Information</h2>
  <div className="space-y-4">
    <h3 className="font-bold">1. To Provide and Maintain Our Forum</h3>
    <p>
      We use your personal information to operate and maintain the forum, ensuring that you can participate in discussions, access content, and use features like posting, commenting, and messaging other users.
    </p>

    <h3 className="font-bold">2. To Improve Our Forum</h3>
    <p>
      We analyze usage data to improve the design, functionality, and content of our forum. This helps us understand how users interact with the platform and make necessary adjustments.
    </p>

    <h3 className="font-bold">3. To Communicate with You</h3>
    <p>
      We use your email address to send you important notifications, such as account-related updates, policy changes, and responses to your inquiries. You may also receive newsletters or promotional content, which you can opt out of at any time.
    </p>

    <h3 className="font-bold">4. To Ensure Security</h3>
    <p>
      Your IP address and other technical data are used to monitor and prevent suspicious activities, ensuring the security of your account and the overall integrity of the forum.
    </p>

    <h3 className="font-bold">5. To Personalize Your Experience</h3>
    <p>
      Cookies and similar technologies help us remember your preferences, such as language settings and display options, to provide a customized experience each time you visit the forum.
    </p>
  </div>

  <h2 className="text-lg font-bold mt-6 mb-4">Sharing Your Information</h2>
  <div className="space-y-4">
    <h3 className="font-bold">1. With Service Providers</h3>
    <p>
      We may share your information with third-party service providers who assist us in operating the forum, such as hosting services, email communication services, and analytics providers. These third parties are obligated to protect your information and use it only for the purposes we specify.
    </p>

    <h3 className="font-bold">2. With Law Enforcement</h3>
    <p>
      We may disclose your personal information if required by law or if we believe that such action is necessary to comply with legal obligations, protect the rights and safety of our users, or investigate potential violations of our terms and conditions.
    </p>

    <h3 className="font-bold">3. With Other Users</h3>
    <p>
      Any information you voluntarily disclose in public areas of the forum, such as posts, comments, and profile details, may be viewed and used by other forum members. Please exercise caution when sharing personal information publicly.
    </p>
  </div>

  <h2 className="text-lg font-bold mt-6 mb-4">Data Security</h2>
  <p>
    We take the security of your personal information seriously and implement a range of measures to protect it. These include encryption, secure servers, and regular security audits. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
  </p>

  <h2 className="text-lg font-bold mt-6 mb-4">Data Retention</h2>
  <p>
    We will retain your personal information for as long as your account is active or as needed to provide you with our services. If you wish to delete your account, you can contact us, and we will remove your information from our active databases. However, some information may be retained for legal, security, or backup purposes.
  </p>

  <h2 className="text-lg font-bold mt-6 mb-4">Your Rights</h2>
  <div className="space-y-4">
    <h3 className="font-bold">1. Access and Correction</h3>
    <p>
      You have the right to access and update your personal information at any time. You can do this through your account settings or by contacting our support team.
    </p>

    <h3 className="font-bold">2. Data Portability</h3>
    <p>
      Upon request, we can provide you with a copy of your personal information in a structured, commonly used, and machine-readable format.
    </p>

    <h3 className="font-bold">3. Right to Erasure</h3>
    <p>
      You can request the deletion of your personal information at any time. We will process your request in accordance with applicable laws and regulations.
    </p>

    <h3 className="font-bold">4. Withdrawal of Consent</h3>
    <p>
      If you have provided consent for the processing of your personal information, you can withdraw that consent at any time by contacting us. This will not affect the lawfulness of processing based on consent before its withdrawal.
    </p>
  </div>

  <h2 className="text-lg font-bold mt-6 mb-4">Third-Party Links</h2>
  <p>
    Our forum may contain links to external websites or services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.
  </p>
</div>

  );
};

export default PrivacyPolicyPage;