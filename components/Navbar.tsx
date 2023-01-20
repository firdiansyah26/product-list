import Link from "next/link";

const MENU_LIST = [
  { text: "List", href: "/" },
  { text: "About", href: "/about" },
];

export const Navbar = () => {
  return (
    <>
      <nav className="fixed z-[1] w-full flex justify-center items-center flex-wrap bg-[#8edfc0] p-3 gap-3">
        {MENU_LIST.map((o, i) => {
          return (
            <Link key={i} href={o.href}>
              <span>{o.text}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};
