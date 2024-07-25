import { useEffect, useState } from "react";

function VMInfo({ vm }: { vm: string }) {
  const [vmDetails, setVmDetails] = useState<{
    version: string;
    memory: string;
    storage: string;
    status: string;
  } | null>(null);

  useEffect(() => {
    async function fetchVmDetails() {
      const response = await fetch("/vmData.json");
      const data = await response.json();
      setVmDetails(data[vm]);
    }

    fetchVmDetails();
  }, [vm]);

  if (!vmDetails) {
    return <div className="text-center">Loading VM details...</div>;
  }

  return (
    <div className="text-left ml-6 mt-6">
      <h1 className="text-3xl font-bold mb-4">{vm} VM Information</h1>
      <ul className="list-none">
        <li><strong>Version:</strong> {vmDetails.version}</li>
        <li><strong>Memory:</strong> {vmDetails.memory}</li>
        <li><strong>Storage:</strong> {vmDetails.storage}</li>
        <li><strong>Status:</strong> {vmDetails.status}</li>
      </ul>
    </div>
  );
}

export default VMInfo;
