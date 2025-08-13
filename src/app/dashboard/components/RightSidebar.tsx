import React from 'react';
import Image from 'next/image';

type RecentActivity = {
  icon: string;
  text: string;
};

const recentActivities: RecentActivity[] = [
  { icon: '/images/icons-dashboard/i-notification.svg', text: 'One new friend request' },
  { icon: '/images/icons-dashboard/Collaboration.svg', text: 'Collaboration request' },
  { icon: '/images/icons-dashboard/recent.svg', text: 'Kofowora is live' },
  { icon: '/images/icons-dashboard/@.svg', text: 'You tagged you' },
];

type UpcomingCollaboration = {
  title: string;
  icons: string[];
  users: string[];
};

const upcomingCollaborations: UpcomingCollaboration[] = [
  {
    title: 'Live Jam Session & Q&A',
    icons: ['/images/icons-dashboard/video.svg', '/images/icons-dashboard/alarm.svg'],
    users: ['/images/icons-dashboard/i-user.jpg', '/images/icons-dashboard/user2.jpg'],
  },
  {
    title: 'Live Jam Session & Q&A',
    icons: ['/images/icons-dashboard/video.svg', '/images/icons-dashboard/alarm.svg'],
    users: ['/images/icons-dashboard/i-user.jpg', '/images/icons-dashboard/user2.jpg'],
  },
  {
    title: 'Live Jam Session & Q&A',
    icons: ['/images/icons-dashboard/video.svg', '/images/icons-dashboard/alarm.svg'],
    users: ['/images/icons-dashboard/i-user.jpg', '/images/icons-dashboard/user2.jpg'],
  },
];

export const RightSidebar: React.FC = () => {
  return (
    <section className="m-5 md:mx-3">
      <div className="hidden md:block">
        <Image
          src="/images/icons-dashboard/image-right.jpg"
          width={350}
          height={275}
          alt="right-image"
          loading="lazy"
          className="!w-[350px] !h-[275px] object-cover rounded-2xl"
        />
      </div>

      <div className="hidden my-10 md:block">
        <h2 className="text-xl font-semibold text-black">Recent Activities</h2>
        {recentActivities.map((item, index) => (
          <div key={index} className="flex gap-3 items-center my-5">
            <Image src={item.icon} width={20} height={20} alt="activity-icon" loading="lazy" />
            <p className="text-base font-normal text-black">{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="my-5 text-xl font-semibold text-black">Upcoming Collaborations</h2>
      <div className="flex flex-col gap-5">
        {upcomingCollaborations.map((session, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 border border-gray-300 shadow lg:flex-col xl:flex-row"
          >
            <div className="flex flex-col gap-5 justify-between items-start">
              <p className="font-normal text-black">{session.title}</p>
              <div className="flex gap-3 items-center">
                {session.icons.map((icon, i) => (
                  <Image key={i} src={icon} width={22} height={20} alt="icon" loading="lazy" />
                ))}
              </div>
            </div>

            <div className="flex relative justify-between items-center my-5 w-17">
              <div className="flex">
                {session.users.map((user, i) => (
                  <Image
                    key={i}
                    src={user}
                    width={40}
                    height={40}
                    alt="user"
                    className={`rounded-full border-2 border-[#A259FF] ${i === 1 ? 'absolute left-7 !h-[40px]' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center">
          <button className="bg-gradient-to-r from-[#A259FF] to-[#0011FF] text-white font-medium text-base md:text-lg rounded-2xl transition py-3 px-5 ">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};