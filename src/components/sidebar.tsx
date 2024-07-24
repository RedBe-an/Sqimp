import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
  export default function Sidebar() {
    return (
      <ResizablePanelGroup direction="horizontal" style={{height:"100%"}}>
        <ResizablePanel >
          First
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel >
          Second
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  