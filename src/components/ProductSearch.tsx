import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDebounce } from '~/hooks/use-debounce';

export default function ProductSearch() {
    const [query, setQuery] = React.useState<string>("")
    const debouncedQuery = useDebounce<string>(query, 500)
    const router = useRouter();
    useEffect(() => {
        !debouncedQuery ? router.push("/products") : router.push(`/products?search=${debouncedQuery}`)
    }, [debouncedQuery])
    return <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" className="input input-bordered  rounded-none " />
}
