import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

/*
  P6: replace the panel content with the real AI assistant.
  Keep these so it fits the layout:
  - default export, no required props
  - fixed to the bottom-right with z-40 (navbar is z-50, mobile drawer is z-60)
  - the footer already leaves room for this button, so keep it about 56px wide
*/
export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Chat assistant"
          className="w-[min(92vw,22rem)] rounded-2xl border border-light-gray bg-white p-5 shadow-2xl"
        >
          <p className="font-semibold text-charcoal">Optimum Sync assistant</p>
          <p className="mt-1 text-sm text-text-secondary">Chat is coming soon.</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-[0_12px_30px_-10px_rgba(32,159,227,0.9)] transition hover:scale-105 hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transition-none"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
