import { Sidebar } from "@/components/component/sidebar";
import { MenubarDemo } from "@/components/menu-bar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
