import { Children } from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="fix left-0 top-10 z-10 h-screen w-60 bg-gray-800">
        <ul className="text-white px-5 py-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
