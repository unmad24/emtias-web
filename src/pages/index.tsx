import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 md:p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to my profile!
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Who I am: <br />
          Software Engineer (NodeJS) <br />
          Researcher (Interest: NLP, HCI, ML/DL) <br />
          Cyclist and Love to travel
          <br />
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] pt-10"
          src="/emtias.jpeg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h2 className="mt-10 "> Social Profiles:</h2>
      <div className="mb-10 mt-10 grid text-center lg:grid-cols-4 lg:text-left gap-4">
        <a
          href="https://www.linkedin.com/in/emtiasur-rahman-788103187/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://github.com/unmad24"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://instagram.com/rahman_emti?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Instagram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://www.facebook.com/rahman.emti?mibextid=ZbWKwL"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Facebook{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>

      <div className="grid">
        <h2>Published Papers:</h2>
        <a
          href="https://drive.google.com/file/d/1-jMQXHCnxEld2GXCYUv6u7kyNHAyQxs-/view?usp=sharing"
          target="_blank"
          className="mt-5"
        >
          1. A Deep Learning Approach to Detect Plagiarism in Bengali Textual
          Content using Similarity Algorithms,{" "}
          <code>
            2023 IEEE International Conference on Contemporary Computing and
            Communications (InC4)
          </code>
        </a>

        <h2 className="mt-10">Projects:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href="https://sharp-torvalds-16e1cf.netlify.app/"
            target="_blank"
            className=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5"
          >
            <Image
              className="object-cover w-full h-96 md:h-auto md:w-48 "
              src="/fluidSupport.png"
              alt=""
              width={200}
              height={50}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fluid Support
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A Frontend page developed with plain HTML/CSS and Bootstrap
              </p>
            </div>
          </a>
          <a
            href="https://sharp-torvalds-16e1cf.netlify.app/"
            target="_blank"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5"
          >
            <Image
              className="object-cover w-full h-96 md:h-auto md:w-48 "
              src="/fluidSupport.png"
              alt=""
              width={200}
              height={50}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fluid Support
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A Frontend page developed with plain HTML/CSS and Bootstrap
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
