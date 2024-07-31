import Officer from "./components/Officer";
import Charles from "./assets/CharlesHeadshot.jpeg";
import Jacob from "./assets/JacobHeadshot.png";
import Parth from "./assets/ParthHeadshot.jpg";
import Connor from "./assets/ConnorHeadshot.jpg";
import Constitution from "./components/Constitution";

const About = () => {
  return (
    <div className="p-8">
      <p className="text-lg">
        The Electronics Design Club is a student organization at Louisiana State
        University. Our mission is to provide students with the resources and
        knowledge to design and build electronic systems. We aim to foster an
        environment where students can learn from each other and collaborate on
        projects. We also hope to provide students with opportunities to network
        with industry professionals and gain real-world experience.
      </p>

      <h3 className="pt-8">Officers:</h3>
      <div className="flex justify-between">
        <Officer name="Jacob Parent" position="President" link={Jacob} />
        <Officer name="Parth Mistry" position="Vice President" link={Parth} />
        <Officer name="Connor Lirette" position="Treasurer" link={Connor} />
        <Officer name="Charles Beam" position="Web Master" link={Charles} />
      </div>

      <h3 className="pt-8">Constitution: </h3>
      <Constitution />
    </div>
  );
};

export default About;
