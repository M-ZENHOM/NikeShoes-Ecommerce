import { useState } from "react";
import type { ProductType } from "~/Types";
import { useDebounce } from "~/hooks/use-debounce";


const FilterData = ({ data }: { data: ProductType[] }) => {

    const [query, setQuery] = useState<string>('');
    const [sortQuery, setSortQuery] = useState<string>('');
    const [categoryQuery, setCategoryQuery] = useState<string>('');
    const debouncedQuery = useDebounce(query, 500)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)

    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortQuery(e.target.value)
    }

    const searchFilter = (array: ProductType[] | []) => {
        return array.filter(
            (el: ProductType) => el.title.toLowerCase().includes(debouncedQuery)
        )
    }
    const searchFilterByCategory = (array: ProductType[] | []) => {
        return array.filter(
            (el: ProductType) => el.category.includes(categoryQuery)
        )
    }
    const sortFilter = (array: ProductType[] | []) => {
        if (sortQuery === "price-asc") {
            return array = array.sort((a, b) => a.price - b.price);
        } else if (sortQuery === "price-desc") {
            return array = array.sort((a, b) => b.price - a.price);
        } else if (sortQuery === "name-asc") {
            return array = array.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortQuery === "name-desc") {
            return array = array.sort((a, b) => b.title.localeCompare(a.title));
        } else {
            return array
        }
    }

    const AllData = () => {
        setQuery('')
        setCategoryQuery('')
    }
    const filtered = debouncedQuery ? searchFilter(data) : categoryQuery ? searchFilterByCategory(data) : sortQuery ? sortFilter(data) : data;

    return {
        handleChange,
        handleSelect,
        sortFilter,
        searchFilter,
        searchFilterByCategory,
        setCategoryQuery,
        setQuery,
        AllData,
        query,
        categoryQuery,
        filtered,
    }
}

export default FilterData