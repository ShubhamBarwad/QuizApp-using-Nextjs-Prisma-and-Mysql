import Link from "next/link";
import CreateQuestion from "./components/CreateQuestion";

export default async function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-5">
        <CreateQuestion />
        <Link href={'/questions'} className='border border-black uppercase px-3 py-2 rounded-md w-max'>see questions</Link>
    </main>
  )
}
