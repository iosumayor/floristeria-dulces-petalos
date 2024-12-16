import { useState } from "react";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return {
    searchQuery,
    handleSearch,
  };
};
