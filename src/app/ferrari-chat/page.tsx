"use client";

import { Chat } from "../components/chat";

export const runtime = 'edge';

export default function Page() {
  return (
    <div>
      <Chat />
    </div>
  );
}
