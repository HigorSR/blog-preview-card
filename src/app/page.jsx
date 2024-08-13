export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-dvh bg-Yellow">
      <div className="flex flex-col gap-6 w-[327px] bg-white p-6 rounded-[20px] border-black border shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <img src="" alt="" className="bg-[url('../../public/illustration-article.svg')] h-[200px] rounded-[10px]" />
        
        <div className="flex flex-col gap-3">
          <p className="font-extrabold text-xs text-Gray-950 bg-Yellow rounded py-1 px-3 w-fit">Learning</p>
          <p className="text-Gray-950 text-xs">Published 21 Dec 2023</p>
          <h1 className="text-Gray-950 font-extrabold text-xl">HTML & CSS foundations</h1>
          <p className="text-Gray-500 text-sm">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-[url('../../public/image-avatar.webp')] h-8 w-8 bg-contain" ></div>
          <p className="text-Gray-950 font-extrabold">Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}
