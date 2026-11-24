"use client";
import { useState } from "react";
const charts = {
    tees: [
        ["S", 52, 68, 21],
        ["M", 55, 71, 22],
        ["L", 58, 74, 23],
        ["XL", 61, 77, 24],
    ],
    hoodies: [
        ["S", 56, 66, 56],
        ["M", 59, 69, 58],
        ["L", 62, 72, 60],
        ["XL", 65, 75, 62],
    ],
};
export default function SizeChart() {
    const [category, setCategory] = useState<"tees" | "hoodies">("tees");
    return (
        <>
        <div className="tabs" aria-label="Jenis pakaian">
            <button
            aria-pressed={category === "tees"}
            onClick={() => setCategory("tees")}
            >
            Kaos
            </button>
            <button
            aria-pressed={category === "hoodies"}
            onClick={() => setCategory("hoodies")}
            >
            Hoodie
            </button>
        </div>
        <div className="table-wrap">
            <table>
            <caption style={{ textAlign: "left", paddingBottom: 15 }}>
                Ukuran {category === "tees" ? "kaos" : "hoodie"} dalam sentimeter
                (cm)
            </caption>
            <thead>
                <tr>
                {["Ukuran", "Lebar dada", "Panjang badan", "Panjang lengan"].map(
                    (c) => (
                    <th key={c} scope="col">
                        {c}
                    </th>
                    ),
                )}
                </tr>
            </thead>
            <tbody>
                {charts[category].map((row) => (
                <tr key={row[0]}>
                    {row.map((cell, i) =>
                    i === 0 ? (
                        <th key={i} scope="row">
                        {cell}
                        </th>
                    ) : (
                        <td key={i}>{cell}</td>
                    ),
                    )}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>
    );
}
