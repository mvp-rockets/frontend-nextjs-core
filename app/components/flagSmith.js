"use client"

import { useFlags } from "flagsmith/react";

export function ShowHeader() {

  const flags = useFlags(['show_header']);
  const showHeader = flags.show_header.enabled;

  return <h1> Feature {showHeader ? <>  Enable </> : <> Disable </>}</h1>
}