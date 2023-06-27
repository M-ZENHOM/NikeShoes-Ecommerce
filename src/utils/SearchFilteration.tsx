import { useState } from "react";
import type { ProductType } from "~/Types";


const SearchFilteration = ({ data }: { data: ProductType }) => {

  const [query, setQuery] = useState<string>('');
  const [categoryQuery, setCategoryQuery] = useState<string>('');

  // For real search query
  // const debouncedQuery = useDebounce(query, 500)
  // const debouncedCategoryQuery = useDebounce(categoryQuery, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)

  }

  const searchFilter = (array: any) => {
    return array.filter(
      (el: ProductType) => el.title.toLowerCase().includes(query)
    )
  }

  const searchFilterByCategory = (array: any) => {
    return array.filter(
      (el: ProductType) => el.category.includes(categoryQuery)
    )
  }

  const AllData = () => {
    setQuery('')
    setCategoryQuery('')
  }

  const filtered = query ? searchFilter(data) : categoryQuery ? searchFilterByCategory(data) : data;

  return {
    handleChange,
    searchFilter,
    searchFilterByCategory,
    setCategoryQuery,
    setQuery,
    AllData,
    query,
    categoryQuery,
    filtered
  }
}

export default SearchFilteration