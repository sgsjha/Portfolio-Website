import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Programming Lecturer",
      month_year: "Feb 2025 - April 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm lg:text-xl font-normal mb-8">
            Computing Staff, Wirral Met College
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>
              Taught full-stack development (JavaScript, Python, React.js,
              Node.js) to 1st and 2nd-year students, through theory classes,
              assessments, and hands-on projects
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Teaching Assistant",
      month_year: "Feb 2023-Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm lg:text-xl font-normal mb-8">
            Department of Computer Science, University of Liverpool
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>
              Communicated complex concepts of mathematics and computer science
              through interactive presentations, resulting in a 96% student
              satisfaction as measured by anonymous surveys
            </li>
            <li>
              Built rapport with students by offering personalized assistance
              resulting in 92% of student's doubts being cleared
            </li>
            <li>
              Led tutorial groups for 2 first-year computer science modules
              using collaborative learning techniques, resulting in 96% of
              students agreeing to come back to class
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Software Engineer Intern",
      month_year: "Aug 2024 - Nov 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm lg:text-xl font-normal mb-8">
            iOS Development Team, Chamberly AB - Sweden, Remote
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>
              Developed full-stack iOS applications using Swift, Swift UI,
              Xcode, Firebase and Freedcamp ensuring high performance and
              responsiveness resulting with a 100% task completion record
            </li>
            <li>
              Collaborated with cross-functional teams to build, design, and
              ship new features, identifying and resolving issues to improve app
              stability minimising crash rates
            </li>
            <li>
              Conducted weekly code review sessions to maintain code quality,
              implementing rigorous testing to ensure compliance with industry
              standards with 100% attendance record
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Accommodation Ambassador",
      month_year: "Sep 2022 - Sep 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm lg:text-xl font-normal mb-8">
            Residential Services, University of Liverpool
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>
              Conducted guided tours of university accommodations during Open
              Days and Applicant Discovery Days using detailed itineraries
            </li>
            <li>
              Showcased rooms, kitchen facilities, and premises to hundreds of
              potential students and parents through informative presentations
              and sharing personal experience resulting in 100% positive
              feedback
            </li>
            <li>
              Distributed Activity Packs to all six university halls of
              accommodation systematically, ensuring a 100% distribution rate
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
