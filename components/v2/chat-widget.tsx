"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUp, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackLead } from "@/lib/analytics";
import { assistant, business } from "@/lib/site-config";

/**
 * Site assistant, bottom right (the WhatsApp button owns bottom left).
 * Structure adapted from the Vistrow assistant (topics, suggested questions,
 * link chips, typing state, lead capture via /api/chat), restyled to design.md:
 * card surface, violet only on actions, no eyebrows, no glass. It is always
 * labelled as an AI assistant, never presented as a person.
 */

type LinkAction = { label: string; href: string };
type ChatMessage = { id: number; sender: "bot" | "visitor"; text: string; links?: LinkAction[] };
type Prompt = { label: string; prompt: string };

const topics: Prompt[] = [
  { label: "Get more enquiries", prompt: "I want more enquiries for my business." },
  { label: "Real estate leads", prompt: "I need leads for a real estate project." },
  { label: "Grow my online store", prompt: "I want to grow my online store's sales." },
  { label: "Free growth audit", prompt: "I'd like a free growth audit." },
];

const questions: Prompt[] = [
  { label: "How much does it cost?", prompt: "How much does working with Marketix Studio cost?" },
  { label: "Which services do you offer?", prompt: "Which services do you offer?" },
  { label: "Do you work outside Pune?", prompt: "Do you work with businesses outside Pune?" },
  { label: "How do I rank on Google Maps?", prompt: "How do I rank higher on Google Maps?" },
];

const greeting: ChatMessage = {
  id: 1,
  sender: "bot",
  text: `Hi, I'm ${assistant.name}, the AI assistant at Marketix Studio. Ask me about our services, how we work or where to start, and I'll point you to the right page.`,
};

const fallback: Omit<ChatMessage, "id"> = {
  sender: "bot",
  text: "Something went wrong on my side. Please try again, or message the team on WhatsApp.",
  links: [{ label: "Contact", href: "/contact" }],
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);
  const leadRef = useRef(false);

  const whatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi Marketix Studio, I'd like to talk about marketing for my business.")}`;

  // Focus the input on desktop only (on phones it would pop the keyboard over the answers).
  useEffect(() => {
    if (!open) return;
    if (window.matchMedia("(pointer: coarse), (max-width: 639px)").matches) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), reduce ? 0 : 280);
    return () => window.clearTimeout(t);
  }, [open, reduce]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [messages, typing, reduce]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  async function send(text: string) {
    const clean = text.trim();
    if (!clean || typing) return;

    idRef.current += 1;
    const visitorMessage: ChatMessage = { id: idRef.current, sender: "visitor", text: clean };
    const history = [...messages, visitorMessage];
    setMessages(history);
    setInput("");
    setTyping(true);

    let reply: Omit<ChatMessage, "id"> = fallback;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ sender: m.sender, text: m.text })),
          leadCaptured: leadRef.current,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && typeof data.reply === "string") {
        reply = { sender: "bot", text: data.reply, links: Array.isArray(data.links) ? data.links : [] };
        if (data.leadCaptured === true && !leadRef.current) {
          leadRef.current = true;
          trackLead("chat");
        }
      } else if (typeof data.error === "string") {
        reply = {
          sender: "bot",
          text: data.error,
          links: [
            { label: "WhatsApp the team", href: whatsapp },
            { label: "Contact", href: "/contact" },
          ],
        };
      }
    } catch {
      reply = fallback;
    }

    idRef.current += 1;
    setMessages((cur) => [...cur, { ...reply, id: idRef.current }]);
    setTyping(false);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    send(input);
  }

  const avatar = (size: number, className = "") => (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-accent/60 bg-bg ${className}`}
      style={{ width: size, height: size }}
    >
      <Image src={assistant.avatar} alt="" fill sizes={`${size}px`} className="object-cover object-top" />
    </span>
  );

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-[45] print:hidden sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open ? (
          <motion.section
            key="panel"
            role="dialog"
            aria-modal="false"
            aria-labelledby="mx-chat-title"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-0 flex h-[min(76dvh,640px)] w-[calc(100vw-2rem)] origin-bottom-right flex-col overflow-hidden rounded-[24px] border border-line bg-card shadow-[0_28px_80px_-20px_rgb(0_0_0/0.9)] sm:w-[400px]"
          >
            {/* Header */}
            <header className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              {avatar(42)}
              <div className="min-w-0 flex-1">
                <h2 id="mx-chat-title" className="truncate font-display text-[0.9375rem] font-bold text-ink">
                  {assistant.name}
                </h2>
                <p className="truncate text-xs text-muted">AI assistant</p>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink-2 transition-colors hover:border-accent hover:text-ink"
              >
                Talk to a person
              </a>
              <button
                type="button"
                onClick={close}
                aria-label={`Close ${assistant.name}`}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-bg/60 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <X className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
              </button>
            </header>

            {/* Conversation */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-5" aria-live="polite">
              <div className="space-y-4">
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-end gap-2 ${m.sender === "visitor" ? "justify-end" : "justify-start"}`}
                  >
                    {m.sender === "bot" && avatar(26, "mb-0.5")}
                    <div className="max-w-[84%]">
                      <p
                        className={`whitespace-pre-line rounded-[18px] px-3.5 py-2.5 text-sm leading-relaxed ${
                          m.sender === "visitor"
                            ? "rounded-br-[6px] bg-accent text-accent-ink"
                            : "rounded-bl-[6px] border border-line bg-bg/60 text-ink-2"
                        }`}
                      >
                        {m.text}
                      </p>
                      {m.links && m.links.length > 0 && (
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {m.links.map((l) => {
                            const cls =
                              "inline-flex items-center gap-1.5 rounded-full border border-accent/50 px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:bg-accent/10";
                            return (
                              <li key={l.href}>
                                {/^https?:\/\//.test(l.href) ? (
                                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                                    {l.label}
                                    <ExternalLink className="h-3 w-3 text-accent" strokeWidth={2.25} aria-hidden="true" />
                                  </a>
                                ) : (
                                  <Link href={l.href} onClick={() => setOpen(false)} className={cls}>
                                    {l.label}
                                    <ArrowRight className="h-3 w-3 text-accent" strokeWidth={2.25} aria-hidden="true" />
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}

                {messages.length === 1 && !typing && (
                  <div className="space-y-5 pl-[34px]">
                    <ul className="flex flex-wrap gap-2" aria-label="Topics">
                      {topics.map((t) => (
                        <li key={t.label}>
                          <button
                            type="button"
                            onClick={() => send(t.prompt)}
                            className="rounded-full border border-line px-3.5 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-ink focus-visible:border-accent focus-visible:outline-none"
                          >
                            {t.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <p className="text-sm font-semibold text-ink">People often ask</p>
                      <ul className="mt-2 divide-y divide-line overflow-hidden rounded-[16px] border border-line">
                        {questions.map((q) => (
                          <li key={q.label}>
                            <button
                              type="button"
                              onClick={() => send(q.prompt)}
                              className="group flex w-full items-center justify-between gap-3 px-3.5 py-3 text-left text-sm text-ink-2 transition-colors hover:bg-bg/60 hover:text-ink focus-visible:bg-bg/60 focus-visible:outline-none"
                            >
                              {q.label}
                              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} aria-hidden="true" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {typing && (
                  <div className="flex items-end gap-2" role="status" aria-label={`${assistant.name} is typing`}>
                    {avatar(26, "mb-0.5")}
                    <div className="flex items-center gap-1 rounded-[18px] rounded-bl-[6px] border border-line bg-bg/60 px-4 py-3.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-muted"
                          animate={reduce ? undefined : { opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.14 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Composer */}
            <form onSubmit={onSubmit} className="border-t border-line p-3">
              <div className="flex items-center gap-2 rounded-full border border-line bg-bg/60 py-1.5 pl-4 pr-1.5 focus-within:border-accent">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={500}
                  placeholder="Ask about ads, SEO, websites..."
                  aria-label={`Message ${assistant.name}`}
                  className="min-w-0 flex-1 bg-transparent py-1.5 text-sm text-ink placeholder:text-muted focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className="mx-cta__arrow disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowUp className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-muted">
                AI answers can be wrong. For advice on your business, talk to the team.
              </p>
            </form>
          </motion.section>
        ) : (
          <motion.button
            key="trigger"
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Ask ${assistant.name}, the Marketix Studio AI assistant`}
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="group flex items-center gap-3 rounded-full border border-line bg-card p-1 shadow-[0_14px_44px_-10px_rgb(0_0_0/0.8)] transition-[border-color,box-shadow] duration-200 hover:border-accent/70 hover:shadow-[0_0_0_6px_rgb(var(--accent)/0.12),0_14px_44px_-10px_rgb(0_0_0/0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:py-1 sm:pl-4 sm:pr-1"
          >
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold leading-tight text-ink">Ask {assistant.name}</span>
              <span className="block text-[11px] leading-tight text-muted">AI assistant</span>
            </span>
            {avatar(48)}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
