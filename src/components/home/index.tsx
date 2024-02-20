import Spinner from '../common/Spinner';
import Footer from '../common/Footer';
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
      <Spinner />
        <Search />
        <SampleCourses />
        <Card />
        <TopCoursesAndSkills />
        <Footer />
    </div>
  );
};

export default index;
