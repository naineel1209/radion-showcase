import Image from "next/image";
import ThemeChanger from "@/components/theme-changer";

export default function Home() {
  return (
    <div className='h-screen w-full bg-primary-light dark:bg-primary-dark flex flex-col justify-center items-center space-y-4'>
      <h1 className='text-text-light dark:text-text-dark text-2xl font-bold'>Hello World</h1>

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
        className="bg-primary-light dark:bg-primary-dark"
      />
      <ThemeChanger />
    </div>
  );
}
