import React from 'react';
import profileImg1 from '~/images/bb.jpg';
import profileImg2 from '~/images/mcq2.jpg';
import profileImg3 from '~/images/bis.jpg';
import profileImg4 from '~/images/giga1.jpg';
import profileImg5 from '~/images/yo.jpg';
import profileImg6 from '~/images/bb2.jpg';

const StaffPage = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="font-bold">Tran Dang Duong</div>
            <img src={profileImg2.src} alt="Tran Dang Duong" className="rounded-full w-24 h-24 object-cover mt-2 mb-4"/>
            </div>
            <div className="col-span-2">
            <p className="font-bold">Project Manager, Product Owner, Backend Developer</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proposal Project Idea and Features, and decide what goes into the product backlog.</li>
              <li>Team formation, team organization (meetings, schedule, plans, rules).</li>
              <li>Manage Project via Agile Method: user stories, task priorities and WIP limits.</li>
              <li>Manage Project via Scrum Method: design release backlogs and organize sprints for the team.</li>
              <li>Set up Database Server and Database Schema. Populate sample Data. Code queries to retrieve data from the database.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="font-bold">Luong Thanh Trung</div>
            <img src={profileImg1.src} alt="Luong Thanh Trung" className="rounded-full w-24 h-24 object-cover mt-2 mb-4"/>
            </div>
            <div className="col-span-2">
            <p className="font-bold">Technical Leader, AI engineer</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Embed AI model's API into the product.</li>
              <li>Collect then store into CSV file the dataline of body shaming comments from online forums, then append these data into the existing dataset for model-retraining.</li>
              <li>Retrain the AI model by multi-label classification to add the “body-shaming” label.</li>
              <li>Fine tuning the AI model to increase the accuracy and evaluate the AI Model efficiency (accuracy, precision, recall, and F1 score).</li>
              <li>Conduct Unit Testing for the team source code.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="font-bold">Nguyen Le Thu Nhan</div>
            <img src={profileImg5.src} alt="Nguyen Le Thu Nhan" className="rounded-full w-24 h-24 object-cover mt-2 mb-4"/>
            </div>
            <div className="col-span-2">
            <p className="font-bold">UX/UI Designer. Front-end developer</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Develop layout for website pages using Figma.</li>
              <li>Design the use case diagram.</li>
              <li>Design the flow of website pages.</li>
              <li>Design the front-end for the thread pages, threads comments and replies, AI comment detector components.</li>
              <li>Develop front-end components related to assigned UI pages.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="font-bold">Mai Tran Duy Anh</div>
            <img src={profileImg3.src} alt="Mai Tran Duy Anh" className="rounded-full w-24 h-24 object-cover mt-2 mb-4"/>
            </div>
            <div className="col-span-2">
            <p className="font-bold">Front-end developer</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Integrate BootStrap and Tailwind as CSS frameworks.</li>
              <li>Decide the color theme and website logo.</li>
              <li>Design and develop the front-end for the navigation bar, header, footer login, authentication pages.</li>
              <li>Responsive development for multiple devices breakpoint.</li>
              <li>Professional Cheerleader</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="font-bold">Nguyen Ba Khoi</div>
            <img src={profileImg4.src} alt="Nguyen Ba Khoi" className="rounded-full w-24 h-24 object-cover mt-2 mb-4"/>
            </div>
            <div className="col-span-2">
            <p className="font-bold">Front-end developer</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Develop CSS animations. Develop a smooth page transition.</li>
              <li>Integrate BootStrap and Tailwind as CSS frameworks. </li>
              <li>Design the front-end for user’s ranking, tittle, emoji system.</li>
              <li>Design and develop the front-end for homepage, user profile, profile updating.</li>
            </ul>
          </div>
        </div>
      </div>  

      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="font-bold">Nguyen Huynh Quang</div>
            <img src={profileImg6.src} alt="Nguyen Huynh Quang" className="rounded-full w-24 h-24 object-cover mt-2 mb-4"/>
            </div>
            <div className="col-span-2">
            <p className="font-bold">DevOP Engineer, Back-end developer</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Write the API contract for the whole team.</li>
              <li>Code the backend API (Model View Controller, Design Patterns, Java classes).</li>
              <li>Develop the texting-feature using socket programming.</li>
              <li>Configuration for the team: Git, JPA (Java Persistence API, Springboot).</li>
              <li>Deployment and CI/CD via Docker. Host the website, cookies, domain.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StaffPage;
