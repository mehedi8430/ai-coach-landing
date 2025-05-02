export const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Design Fundamentals',
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Smith',
      image: '/images/course_1.png',
    },
    {
      id: 2,
      title: 'Web Design Fundamentals',
      duration: '4 Weeks',
      level: 'Beginner',
      author: 'John Smith',
      image: '/images/course_2.png',
    },
  ];

  return (
    <section className="w-[1441.62px] mx-auto space-y-10 py-[60px] ">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[48px] font-semibold text-[#262626] leading-[150%] tracking-[0%] ">
            Our Courses
          </h2>
          <p className="text-[18px] font-normal text-[#59595A] leading-[150%] tracking-[0%] w-[1029px] ">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="bg-[#002868] px-[24px] py-[18px] rounded-[8px] font-medium text-[#FFFFFF] text-[18px] leading-[150%] tracking-[0%] hover:bg-[#001f47] transition-all mt-auto">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-[50px] rounded-[15px] border-[1px] border-[#F1F1F3] bg-[#F0F0F0] flex flex-col gap-[30px]"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[380px] object-cover rounded-lg"
            />

            <div className="flex items-center justify-between">
              <div className="space-x-[10px]">
                <span className="bg-[#FFFFFF] py-[10px] px-[16px] rounded-[8px] border-[1px] border-[#F1F1F3] text-[#4C4C4D] font-medium text-[18px] leading-[100%] tracking-[0%] ">{course.duration}</span>
                <span className="bg-[#FFFFFF] py-[10px] px-[16px] rounded-[8px] border-[1px] border-[#F1F1F3] text-[#4C4C4D] font-medium text-[18px] leading-[100%] tracking-[0%] ">{course.level}</span>
              </div>
              <span className="text-[#262626] font-medium text-[20px] leading-[100%] tracking-[0%] ">By {course.author}</span>
            </div>

            <div>
              <h3 className="text-[#262626] font-semibold text-[24px] leading-[150%] tracking-[0%] ">
                {course.title}
              </h3>
              <p className="text-[#4C4C4D] font-normal text-[18px] leading-[150%] tracking-[0%] ">
                Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
              </p>
            </div>

            <button className="mt-auto w-full py-[18px] px-[24px] border-[1px] border-[#F1F1F3] bg-[#002868] rounded-[8px] text-[#FFFFFF] text-[18px] leading-[150%] tracking-[0%] font-medium font-be_vietnam_pro hover:bg-[#001f47] transition-all">
              Get it Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}