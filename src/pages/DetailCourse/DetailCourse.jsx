import { useLoaderData } from 'react-router-dom';

const DetailCourse = () => {
  const course = useLoaderData();
  console.log(course);
  return <div>DetailCourse</div>;
};

export default DetailCourse;
