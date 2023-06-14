import React from 'react'
import CourseDetail from '@/components/CourseDetail';
import CourseLearnings from '@/components/CourseLearnings';
import { Course, Demo } from '@/intefaces/interface';
import { useEffect, useState } from 'react';
import { fetchLearningPath } from '@/lib/api';
import Nav from '@/components/nav';

interface Props {
  course: Demo;
}

const Home: React.FC<Props> = ({ course }) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Nav />
      <CourseDetail learnPath={course} />
      <CourseLearnings learnPath={course}/>
    </>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetchLearningPath();

  // Pass data to the page via props
  return { props: { course: data  } }
}

export default Home
