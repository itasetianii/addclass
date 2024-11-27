import { DATA_SKILLS } from './DATA_SKILLS';
import ProjectCard from './SkillsCard';

export default function SkilsSection() {
  return (
    <section className=" w-full flex flex-col space-y-10 justify-center items-center" id="skils">
      <h2 className="text-center uppercase font-medium text-[var(--primary-color)] text-5xl">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 container">
        {DATA_SKILLS.map((data, idx) => (
          <ProjectCard data={data} key={idx} />
        ))}
      </div>
    </section>
  );
}
