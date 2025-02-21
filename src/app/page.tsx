import Chat from "@/components/modules/chat";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] place-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex w-full flex-col items-center gap-8 sm:items-start">
        <h1 className="mx-auto">plan, execute, reward</h1>
        <Chat />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 text-xs">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://webkowski.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Handcrafted by webkowski.com 🚀
        </a>
      </footer>
    </div>
  );
}
