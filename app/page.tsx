export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-9">
      <h1 className="text-4xl md:text-7xl lg:text-9xl">Ancient Miners</h1>
      <div className="flex gap-2 md:gap-3 lg:gap-5 items-center">
        <p className="text-lg md:text-3xl lg:text-6xl">IP:</p>
        <code className="text-lg md:text-3xl lg:text-6xl px-3 md:px-4 lg:px-5 py-1 md:py-3 lg:py-4 bg-slate-800 rounded-xl">
          play.ancientminers.com
        </code>
      </div>
    </main>
  );
}
