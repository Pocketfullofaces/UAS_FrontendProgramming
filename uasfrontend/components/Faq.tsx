"use client";
import { useState } from "react";
export default function Faq({
    items,
    }: {
    items: { question: string; answer: string }[];
}) {
    const [query, setQuery] = useState("");
    const list = items.filter((i) =>
        (i.question + " " + i.answer)
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
    );
    return (
        <>
        <div className="field">
            <label htmlFor="faq-search">Cari pertanyaan</label>
            <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari topik bantuan…"
            />
        </div>
        <p className="form-note" role="status">
            {list.length
            ? `${list.length} jawaban tersedia`
            : "Belum ada jawaban yang cocok. Coba kata lain atau hubungi kami."}
        </p>
        <div className="accordions">
            {list.map((i) => (
            <details key={i.question}>
                <summary>{i.question}</summary>
                <p>{i.answer}</p>
            </details>
            ))}
        </div>
        </>
    );
}
