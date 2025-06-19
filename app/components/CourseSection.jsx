// ✅ Section 2: CourseSection.jsx

'use client';
import Image from 'next/image';

const courses = {
  basic: {
    title: 'Basic Package',
    price: '₹999',
    image: '/basic.png',
    items: [
      'Spoken English',
      'Affiliate Marketing',
      'Lead Generation',
      'Communication Skills',
      'Video Editing',
    ],
  },
  pro: {
    title: 'Pro Package',
    price: '₹2999',
    image: '/pro.png',
    items: [
      'Share Market Expert',
      'Graphic Design',
      'Rich Mindset',
      'YouTube, Facebook, Instagram',
      'WhatsApp Marketing',
    ],
  },
};

const CourseCard = ({ type, data }) => (
  <div className="rounded-2xl shadow-lg p-6 bg-white w-full sm:w-[48%] flex flex-col justify-between hover:shadow-xl transition">
    <Image
      src={data.image}
      alt={`${data.title} image`}
      width={500}
      height={300}
      className="rounded-xl mb-4 object-cover h-48 w-full"
    />
    <h3 className="text-xl font-semibold mb-2 text-center">{data.title}</h3>
    <p className="text-lg text-center text-green-600 font-bold mb-3">{data.price}</p>
    <ul className="space-y-1 mb-4 text-sm">
      {data.items.map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          ✔ {item}
        </li>
      ))}
    </ul>
    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl px-4 py-2 hover:scale-105 transition">
      Enroll Now
    </button>
  </div>
);

export default function CourseSection() {
  return (
    <section className="bg-gray-100 py-16 px-4" id="courses">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <CourseCard type="basic" data={courses.basic} />
          <CourseCard type="pro" data={courses.pro} />
        </div>
      </div>
    </section>
  );
}