const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 pb-2">
      <h2 className="scroll-m-20 text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-neutral-500">{subtitle}</p>
    </header>
  );
};

export default SectionHeader;
