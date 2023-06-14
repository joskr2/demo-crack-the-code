import { Demo } from "@/intefaces/interface";
import Image from "next/image";

interface CourseDetailProps {
  learnPath: Demo;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ learnPath }) => {
  return (
    <div>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {learnPath?.name}
                  <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                {learnPath?.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {learnPath?.description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Empezar
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Mas info <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src={"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"}
              width={500}
              height={500}
              alt=""
            />
            {/* <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={learnPath?.cover}
            width={500}
            height={500}
            alt=""
          /> */}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg  p-6">
        <h2 className="text-2xl font-bold mb-4">{learnPath?.name}</h2>
        <p className="text-gray-500 mb-6">{learnPath?.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold">Lessons</h3>
            <ul className="list-disc list-inside mt-2 text-gray-500">
              {learnPath?.courses.map((course, index) => (
                <li key={index}>{course.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Benefits</h3>
            <ul className="list-disc list-inside mt-2 text-gray-500">
              {learnPath?.benefits.map((benefit, index) => (
                <li key={index}>
                  <span className="font-bold">{benefit?.title}: </span>
                  {benefit?.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;