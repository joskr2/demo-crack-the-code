import CourseCard from '@/components/CourseCard';
import { All, Course } from '@/interfaces/interfaces';
import { fetchCourses } from '@/lib/api';
import { GetServerSideProps } from 'next';
import { FC, useEffect, useState } from 'react';

interface Props {
  courses: Course[];
}

const Home: FC<Props> = ({ courses }) => {

  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  const filterCoursesByAge = (age: number) => {
    if (age === selectedAge) {
      setFilteredCourses(courses);
      setSelectedAge(null);
    } else {
      const filtered = courses.filter((course) => {
        const minOrder = (age / 5 - 1) * 5 + 1;
        const maxOrder = minOrder + 4;
        return course.order_in_learning_path >= minOrder && course.order_in_learning_path <= maxOrder;
      });
      setFilteredCourses(filtered);
      setSelectedAge(age);
    }
  };


  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Filtrar por edad:</h3>
          <div className="mt-4 flex space-x-4">
            {[5, 10, 15].map((age) => (
              <button
                key={age}
                className={`${selectedAge === age ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
                  } px-4 py-2 rounded-md`}
                onClick={() => filterCoursesByAge(age)}
              >
                {age} años
              </button>
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lista de Cursos</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchCourses();
    const allCourses = data.all.flatMap((allItem: All) => allItem.courses);
    return {
      props: {
        courses: allCourses,
      },
    };
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    return {
      props: {
        courses: [],
      },
    };
  }
};

export default Home
