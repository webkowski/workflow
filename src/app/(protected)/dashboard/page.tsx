import Chat from "@/components/modules/chat";
import { ProjectValidator } from "@/components/modules/project/ProjectValidator";

export default function Page() {
  return (
    <div className="flex min-h-[1200px] flex-1 flex-col gap-8 p-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
          <ProjectValidator />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Chat</h2>
          <Chat />
        </div>
      </div>
    </div>
  );
}
