import Link from 'next/link';

interface BreadcrumbProps {
  /** The pages above this one, from Home down. */
  trail: readonly { label: string; href: string }[];
  /** This page's name, shown last and not as a link. */
  current: string;
}

/** Where a page sits, such as Home / Blog / the post, with each level but the last as a link. */
export default function Breadcrumb({ trail, current }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-rubik text-sm text-gray-light md:text-[15px]">
        {trail.map(link => (
          <li key={link.href} className="flex items-center gap-2">
            <Link href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
            <span aria-hidden="true" className="text-foreground/30">
              /
            </span>
          </li>
        ))}
        <li aria-current="page" className="font-medium text-foreground">
          {current}
        </li>
      </ol>
    </nav>
  );
}
