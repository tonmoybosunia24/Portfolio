/** Faint red light at both edges of a beam, dark in the middle. */
const beamLight =
  'bg-[linear-gradient(90deg,rgb(255_1_79/0.1),rgb(255_1_79/0.03)_20%,transparent_42%,transparent_58%,rgb(255_1_79/0.03)_80%,rgb(255_1_79/0.1))]';

/**
 * Two overlapping light beams that narrow down onto the portrait, like on the previous site. Only their
 * edges are lit. They are sized from the portrait's own box, so they scale and move with the photo.
 */
export default function LightBeams() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[170%] w-[260%] -translate-x-1/2"
    >
      <div className={`absolute inset-0 ${beamLight} [clip-path:polygon(0_0,100%_0,72%_100%,28%_100%)]`} />
      <div className={`absolute inset-0 ${beamLight} [clip-path:polygon(16%_0,84%_0,63%_100%,37%_100%)]`} />
    </div>
  );
}
