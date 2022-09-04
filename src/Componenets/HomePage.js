import Bio from "./Bio";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact.js";

const HomePage = () => {
  return (
    <div>
      <Bio />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Contact />
    </div>
  );
};

export default HomePage;
