'use client';

import { type KeyboardEvent, useLayoutEffect, useRef, useState } from 'react';

import ProjectGrid from '@/components/ui/ProjectGrid';

import { type Project, PROJECTS } from '@/constants/projects';

type TabKind = (typeof PROJECTS.tabs)[number]['kind'];

const count = (kind: TabKind) =>
  kind === 'all' ? PROJECTS.items.length : PROJECTS.items.filter(project => project.kind === kind).length;

/**
 * Tabs above the project cards as plain text: All Projects, Mobile Apps, Web Apps and UI/UX Design (short
 * labels below 640px), on the left (in line
 * with the title above and the cards below, the first label starting at the edge). A pink bar slides
 * under the selected tab, with no line under the others. Until the page is
 * interactive the selected tab draws its own bar, so it never shows without one. Counts follow the labels
 * from 640px. The arrow keys move between the tabs, as in any tab list. Cards added by a switch grow into
 * view.
 */
export default function ProjectTabs() {
  const [active, setActive] = useState<TabKind>('all');
  const listRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = PROJECTS.tabs.findIndex(tab => tab.kind === active);
  const projects: Project[] =
    active === 'all' ? [...PROJECTS.items] : PROJECTS.items.filter(project => project.kind === active);

  // Moves the bar under the selected tab, now and whenever the row changes size.
  useLayoutEffect(() => {
    const list = listRef.current;
    const bar = barRef.current;

    if (!list || !bar) return;

    const place = () => {
      const tab = tabRefs.current[activeIndex];

      if (!tab) return;
      bar.style.width = `${tab.offsetWidth}px`;
      bar.style.transform = `translateX(${tab.offsetLeft}px)`;
    };

    place();

    if (!list.dataset.ready) {
      // Read a layout value so the first position is applied before the slide transition is switched on.
      void bar.offsetWidth;
      list.dataset.ready = 'true';
    }

    const observer = new ResizeObserver(place);

    observer.observe(list);

    return () => observer.disconnect();
  }, [activeIndex]);

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

    if (!step) return;
    event.preventDefault();

    const next = (index + step + PROJECTS.tabs.length) % PROJECTS.tabs.length;
    const tab = PROJECTS.tabs[next];

    if (tab) {
      setActive(tab.kind);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <>
      <div className="flex">
        <div
          ref={listRef}
          role="tablist"
          aria-label="Filter projects"
          className="group/tabs relative flex gap-6 sm:gap-8 md:gap-10"
        >
          {PROJECTS.tabs.map(({ kind, label, short }, index) => {
            const selected = kind === active;

            return (
              <button
                key={kind}
                ref={element => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`tab-${kind}`}
                aria-selected={selected}
                aria-controls="projects-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(kind)}
                onKeyDown={event => onKeyDown(event, index)}
                className={`relative flex items-center gap-2 pt-1 pb-2 font-rubik text-[15px] font-medium whitespace-nowrap transition-colors duration-300 max-[359px]:text-sm md:pb-2.5 md:text-lg ${
                  selected
                    ? 'text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-primary group-data-ready/tabs:after:hidden'
                    : 'text-gray-light hover:text-foreground'
                }`}
              >
                <span className="sm:hidden">{short}</span>
                <span className="hidden sm:inline">{label}</span>
                <span
                  className={`hidden text-xs font-semibold transition-colors duration-300 sm:inline md:text-sm ${
                    selected ? 'text-primary' : 'text-gray-light/70'
                  }`}
                >
                  {String(count(kind)).padStart(2, '0')}
                </span>
              </button>
            );
          })}

          <span
            ref={barRef}
            aria-hidden="true"
            className="absolute -bottom-px left-0 hidden h-0.5 rounded-full bg-primary group-data-ready/tabs:block group-data-ready/tabs:transition-[transform,width] group-data-ready/tabs:duration-300 group-data-ready/tabs:ease-out"
          />
        </div>
      </div>

      <div id="projects-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-10 md:mt-12">
        <ProjectGrid key={active} projects={projects} heading="h2" />
      </div>
    </>
  );
}
