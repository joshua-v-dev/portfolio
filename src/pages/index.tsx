import React from 'react';
import Particles from '../components/Particles/index';
import Projects from '../components/Projects';
import Acomplishments from '../components/Acomplishments';
import Timeline from '../components/TimeLine';
import Layout from './layout/Layout';
import ProjectsPage from 'src/components/ProjectsPage';

const Home: React.FC = () => {
  return (
    <Layout>
      <Projects />
      <ProjectsPage />
      <Timeline />
      <Acomplishments />
      <Particles />
    </Layout>
  );
};

export default Home;
