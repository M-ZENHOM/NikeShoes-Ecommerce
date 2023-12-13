import { useRouter } from 'next/router'
import React from 'react'
import { sortOptions } from '~/config/products'

export default function ProductsSort() {
    const router = useRouter()
    return (
        <select onChange={(e) => router.push(`/products?grid=${router.query.grid || "true"}&sort=${e.target.value || "a-z"}&category=${router.query.category || ""}`)} defaultValue={router.query.sort!} className="select select-bordered">
            <option disabled defaultValue={router.query.sort!}>Sort by</option>
            {sortOptions.map((s, i) => (
                <option key={i} value={s.value}>{s.label}</option>
            ))}
        </select>
    )
}
