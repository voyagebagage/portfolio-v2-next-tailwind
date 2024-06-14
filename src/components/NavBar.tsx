"use client";
import { cn } from "@/lib/utils";
import XStack from "@/ui/XStack";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { TriangleLogoSmall } from "./TriangleLogoSmall";
// import { items } from "../../landingPage/profileHeader/data";
// import { getToken } from "@/app/utils/tokenManager";
// import BurgerMenu from "./BurgerMenu";
// import MIconButton from "../../MIconButton";
// import { ChevronUpIcon } from "@heroicons/react/outline";
// import { useColor } from "@/app/customHooks/useColor";

type Props = {
  visitingName: string | undefined;
  setVisitingName: React.Dispatch<React.SetStateAction<string | undefined>>;
};
// { visitingName, setVisitingName }: Props
const NavBar = () => {
  //   const index = useColor();
  const [positionFromTop, setPositionFromTop] = useState(false);

  useEffect(() => {
    // fetchName();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setPositionFromTop(window.scrollY >= 700);
  };

  //   const fetchName = () => {
  //     const nameInToken: string | undefined = getToken()?.split("--")[0];
  //     if (visitingName === "") {
  //       setVisitingName(nameInToken);
  //     }
  //   };

  return (
    <>
      <XStack
        className={cn(
          "fixed top-0 w-full items-center justify-between backdrop-blur-lg z-[99009] max-h-[8.3vh]",
          {
            "px-2 py-1": positionFromTop,
            "px-10 pt-1": !positionFromTop,
          }
        )}>
        <div className="flex items-center">{/* <TriangleLogoSmall /> */}</div>
        <p
          className={cn(
            "text-xl font-bold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent",
            {
              "ml-0": positionFromTop,
              "ml-[-10rem]": !positionFromTop,
            }
          )}>
          Welcome
          {/* {visitingName} */}
        </p>
        {positionFromTop && (
          <AnchorLink href="#home">
            {/* <MIconButton
              aria-label="top"
              icon={<ChevronUpIcon className="h-5 w-5" />}
              size="sm"
              className="bg-teal-500 opacity-50 hover:opacity-100"
            /> */}
          </AnchorLink>
        )}
        <div className="hidden md:flex justify-around gap-8">
          <div className="cta hover:text-teal-400">
            <AnchorLink href="#about" className="hover-underline-animation">
              <span className="text-teal-400">00. About</span>
            </AnchorLink>
          </div>
          <div className="cta hover:text-teal-400">
            <AnchorLink href="#work" className="hover-underline-animation">
              <span className="text-teal-400">01. Work</span>
            </AnchorLink>
          </div>
          <div className="cta hover:text-teal-400">
            <AnchorLink href="#projects" className="hover-underline-animation">
              <span className="text-teal-400">02. Projects</span>
            </AnchorLink>
          </div>
          <div className="cta hover:text-teal-400">
            <AnchorLink href="#contact" className="hover-underline-animation">
              <span className="text-teal-400">03. Contact</span>
            </AnchorLink>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          {/* <BurgerMenu /> */}
        </div>
      </XStack>
    </>
  );
};

export default NavBar;
