import Heading from '../common/Heading';
import Caption1 from './Caption1';
import Card from './Card';
import SampleCourses from './SampleCourses';
import Search from './Search';
import TopCoursesAndSkills from './TopCoursesAndSkills';

const index = () => {
  return (
    <div>
        <Heading />
        <Caption1 />
        <Search />
        <SampleCourses />
        <Card />
        <TopCoursesAndSkills />
    </div>
  );
};

export default index;
