import Image from 'next/image';
import Link from 'next/link';

export interface IProject {
  title: string;
  tag: string;
  desc: string;
  img: string;
}
export default function ProjectCard({ data }: { data: IProject }) {
  return (
    <Link href="#" className="group relative block bg-black">
      <Image width={500} height={500} alt={data.title} src={data.img} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--primary-color)]">{data.tag}</p>

        <p className="text-xl font-bold text-white sm:text-2xl">{data.title}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-lg text-white">{data.desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
