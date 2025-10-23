import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1>José Juan Cortina Ruiz</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus iste vitae, aliquam voluptatibus fuga recusandae, suscipit deserunt tempora reprehenderit, cupiditate praesentium autem harum. Inventore neque voluptatibus eaque saepe nihil.
          Maxime, quas quia? Maxime enim numquam, maiores tenetur reprehenderit assumenda. Ea nobis expedita, autem quos suscipit dolorem ab illum necessitatibus, ratione provident distinctio voluptatibus iure id. Minima architecto id rem!
          Accusantium deleniti similique non omnis eaque consectetur placeat, deserunt suscipit voluptatibus voluptates aliquid asperiores eligendi id obcaecati? Ut itaque eum quam, tempore dicta aliquid dolores provident perferendis blanditiis neque officiis?</p>
      </main>
    </div>
  );
}
