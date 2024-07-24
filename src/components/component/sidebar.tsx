
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { JSX, SVGProps } from "react"
import { ModeToggle } from "../mode-toggle"

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex w-14 flex-col border-r bg-background sm:w-64">
      <div className="flex items-center justify-start gap-3 px-4 py-5 border-b">
        <img src="/sqimp-logo.png" alt="Sqimp Logo" width={32} height={32} className="w-8 h-8" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Sqimp</span>
          <span className="text-sm text-muted-foreground">v0.0.1</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex-1 overflow-auto">
          <div className="flex items-center justify-between mb-3 mt-4">
            <h3 className="text-lg font-semibold ml-4">VM List</h3>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon className="w-5 h-5" />
              <span className="sr-only">New</span>
            </Button>
          </div>
          <ScrollArea className="h-full">
            <div className="grid gap-2">
              <Button variant="ghost" className="justify-start gap-2">
                <img src="/windows-icon.png" alt="Windows" width={24} height={24} className="w-6 h-6 rounded-sm" />
                Windows
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <img src="/macos-icon.png" alt="MacOS" width={24} height={24} className="w-6 h-6 rounded-sm" />
                MacOS
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <img src="/linux-icon.png" alt="Linux" width={24} height={24} className="w-6 h-6 rounded-sm" />
                Linux
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-5 border-t">
        <ModeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <SettingsIcon className="w-5 h-5" />
          <span className="sr-only">Change Settings</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <CircleHelpIcon className="w-5 h-5" />
          <span className="sr-only">Check Official Documentation</span>
        </Button>
      </div>
    </aside>
  )
}

function CircleHelpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
