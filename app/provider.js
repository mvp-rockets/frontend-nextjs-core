"use client";

import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";

export default function Provider({
  children,
  flagsmithState,
}) {
  return (
    <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
      {children}
    </FlagsmithProvider>
  );
}