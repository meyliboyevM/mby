import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full pt-10" id='experiences'>
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
