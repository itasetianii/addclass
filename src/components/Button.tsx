export default function Button({ className, children, link }: { link: string; className?: string; children: React.ReactNode }) {
  return (
    <a rel="noopener noreferrer" href={link} className={`uppercase text-3xl px-8 py-1   bg-[var(--primary-color)] border-[4px]  border-[var(--primary-color)] text-white ${className}`}>
      {children}
    </a>
  );
}

export function ButtonBorder({ className, children, link }: { link: string; className?: string; children: React.ReactNode }) {
  return (
    <a rel="noopener noreferrer" href={link} className={`uppercase text-3xl px-8 py-1  border-[4px]  border-[var(--primary-color)] text-[var(--primary-color)] ${className}`}>
      {children}
    </a>
  );
}
