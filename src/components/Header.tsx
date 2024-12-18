import React from "react";

export default function Header() {
  return (
    <header className="py-4 flex justify-around w-full items-center">
      <SvgIcon />
      <button className="px-4 py-2 bg-Primary rounded-md text-white font-bold">
        Get Started
      </button>
    </header>
  );
}

const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="79"
    height="20"
    fill="none"
    viewBox="0 0 79 20"
  >
    <path
      fill="#000"
      d="M12.46 1h3.96l-2.8 14H9.66zM4.28 15H.32l2.8-14h3.96zm6.76-5.46H5.1l.66-3.28h5.94zm9.873 5.64q-1.32 0-2.3-.56-.96-.58-1.36-1.7t-.08-2.78l1.2-5.98h3.8l-1.12 5.62q-.219 1.04.12 1.6.36.56 1.26.56.96 0 1.6-.58.66-.6.9-1.84l1.08-5.36h3.8L27.653 15h-3.6l.62-3.06.48.88q-.78 1.22-1.92 1.8-1.12.56-2.32.56m18.128-11.2q1.38 0 2.34.58.96.56 1.36 1.68.42 1.1.08 2.76l-1.2 6h-3.8l1.12-5.64q.22-1.04-.14-1.6-.34-.56-1.28-.56-.96 0-1.62.6t-.92 1.84L33.9 15h-3.8l2.16-10.84h3.6l-.62 3.04-.48-.88q.78-1.22 1.92-1.78a5.4 5.4 0 0 1 2.36-.56m9.786 11.2q-1.26 0-2.16-.48a2.8 2.8 0 0 1-1.28-1.44q-.381-.96-.12-2.28l1.84-9.24h3.8l-1.84 9.22q-.1.62.14.96.24.32.82.32.3 0 .58-.08t.56-.24l.48 2.62q-.6.34-1.34.48a6.8 6.8 0 0 1-1.48.16m-4.44-7.78.58-2.84h7.84l-.56 2.84zm10.66 7.78q-.96 0-1.56-.58-.6-.6-.6-1.5 0-1.1.72-1.76t1.72-.66q.96 0 1.54.58.6.58.6 1.5 0 .72-.34 1.26-.32.54-.88.86-.54.3-1.2.3m3.784-.18L61.791.16h3.8L62.631 15zm7.53 4.06a5.7 5.7 0 0 1-1.7-.26q-.86-.26-1.36-.68l1.7-2.68q.34.28.76.44.42.18.92.18.56 0 .96-.28t.76-.88l.78-1.26.32-.38 5.46-9.1h3.72l-6.94 11.32q-.84 1.38-1.64 2.16t-1.7 1.1-2.04.32m2-3.6-2.54-11.3h3.78l1.8 8.76z"
    ></path>
  </svg>
);
