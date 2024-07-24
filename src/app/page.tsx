import { MenubarDemo } from "@/components/menu-bar";
import { ModeToggle } from "@/components/mode-toggle";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <MenubarDemo />
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
