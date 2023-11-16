import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { useState } from 'react'
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <style jsx global>{`
  
`}</style>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
