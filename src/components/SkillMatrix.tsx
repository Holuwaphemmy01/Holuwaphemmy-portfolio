import { skillGroups } from '../data/profile.js';

export function SkillMatrix({ compact = false }) {
  return (
    <div className={compact ? 'grid gap-3' : 'grid grid-cols-3 gap-4 max-[940px]:grid-cols-2 max-[620px]:grid-cols-1'}>
      {skillGroups.map((group, index) => (
        <section
          className={[
            'border-2 border-black bg-white/95 p-5 backdrop-blur dark:border-neutral-600 dark:bg-neutral-900/95 animate-fade-in-up',
            compact
              ? ''
              : index % 2 === 0
                ? 'shadow-[6px_6px_0_#22d3ee] dark:shadow-[6px_6px_0_rgba(34,211,238,0.25)]'
                : 'shadow-[6px_6px_0_#84cc16] dark:shadow-[6px_6px_0_rgba(132,204,22,0.25)]',
            `stagger-${index + 1}`
          ].join(' ')}
          key={group.title}
        >
          <h2 className="mb-4 text-[15px] font-black uppercase">{group.title}</h2>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span className="border-2 border-black bg-white px-2.5 py-1.5 text-xs font-black dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
