import { useFlags, useFlagsmith } from 'flagsmith/react';


export default function Home() {
  const flags = useFlags(['show_header']);
  const showHeader = flags.show_header.enabled;
  
  return (
    <div>
      <main>
      {showHeader ? (<h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>): (<h1 >
          Welcome to <a href="https://nextjs.org"> Not Next.js!</a>
        </h1>)}
        
      </main>

    </div>
  )
}