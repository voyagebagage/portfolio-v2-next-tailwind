"use client";
import { cn } from "@/lib/utils";
import XStack from "@/components/ui/XStack";
import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useItem } from "@/lib/fetchItem";
import { TriangleLogoSmall } from "./ui/TriangleLogoSmall";
import Highlight from "./ui/Highlight";
// import { getToken } from "@/app/utils/tokenManager";
// import BurgerMenu from "./BurgerMenu";
// import MIconButton from "../../MIconButton";
// import { ChevronUpIcon } from "@heroicons/react/outline";
// import { useItem } from "@/app/customHooks/useItem";

type Props = {
  visitingName: string | undefined;
  setVisitingName: React.Dispatch<React.SetStateAction<string | undefined>>;
};
// { visitingName, setVisitingName }: Props
const NavBar = () => {
  //   const index = useItem();
  const [positionFromTop, setPositionFromTop] = useState(false);
  const { data: item, isPending, isFetching } = useItem();

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
  console.log("navbar" + item?.color);
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
        <div className="flex items-center">
          <TriangleLogoSmall />
        </div>

        <p
          className={cn("text-xl font-bold bg-clip-text text-transparent", {
            "ml-0": positionFromTop,
            "ml-[-10rem]": !positionFromTop,
            "text-myCyan": isPending || isFetching,
          })}
          style={{
            backgroundImage: `linear-gradient(to right, ${item?.color}, #4ff3cc)`,
          }}>
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
          <div className="cta hover:text-teal-400 ">
            <AnchorLink href="#about" className="hover-underline-animation ">
              <Highlight query={["00."]} className="text-teal-400 ">
                00. About
              </Highlight>
            </AnchorLink>
          </div>
          <div className="cta hover:text-teal-400">
            <AnchorLink href="#work" className="hover-underline-animation">
              <Highlight query={["01."]} className="text-teal-400">
                01. Work
              </Highlight>
            </AnchorLink>
          </div>
          <div className="cta hover:text-teal-400">
            <AnchorLink href="#projects" className="hover-underline-animation">
              <Highlight query={["10."]} className="text-teal-400">
                10. Projects
              </Highlight>
            </AnchorLink>
          </div>
          <div className="cta hover:text-teal-400">
            <AnchorLink href="#contact" className="hover-underline-animation">
              <Highlight query={["11."]} className="text-teal-400">
                11. Contact
              </Highlight>
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
