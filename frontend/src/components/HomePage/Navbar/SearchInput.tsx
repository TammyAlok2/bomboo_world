"use client";

import { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useProductDataStore } from "@/stores/productStore";
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';

interface SearchSuggestion {
  id: string;
  name: string;
}

const SearchInput = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { allProduct } = useProductDataStore();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsInputVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchSuggestions = debounce(async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      setNoResults(false);
      return;
    }

    setIsLoading(true);
    setNoResults(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const response = await allProduct({ search: query });
      const products = response?.products || [];
      setSuggestions(products.map(product => ({
        id: product._id,
        name: product.name
      })));
      setNoResults(products.length === 0);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
      setNoResults(true);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  useEffect(() => {
    fetchSuggestions(search);
  }, [search]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent search if input is empty or contains only whitespace
    if (!search.trim()) {
      return;
    }
    
    try {
      const response = await allProduct({ search });
      const products = response?.products || [];
      
      if (products.length > 0) {
        // If products found, redirect to the first product
        router.push(`/singleproduct/${products[0]._id}`);
      } else {
        // If no products found, redirect to all products page
        router.push('/allproducts');
      }
      
      onSearch(search);
      setShowSuggestions(false);
      setIsInputVisible(false);
    } catch (error) {
      console.error('Error during search:', error);
      // In case of error, redirect to all products
      router.push('/allproducts');
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearch(suggestion.name);
    setShowSuggestions(false);
    setIsInputVisible(false);
    router.push(`/singleproduct/${suggestion.id}`);
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
    setShowSuggestions(false);
  };

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-4">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const renderSuggestionsList = () => {
    if (isLoading) {
      return (
        <div className="px-4 py-3 text-gray-500 text-center">
          <LoadingSpinner />
        </div>
      );
    }

    if (noResults) {
      return (
        <div className="px-4 py-3 text-gray-500 text-center">
          No products found
        </div>
      );
    }

    return suggestions.map((suggestion) => (
      <button
        key={suggestion.id}
        onClick={() => handleSuggestionClick(suggestion)}
        className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
      >
        {suggestion.name}
      </button>
    ));
  };

  return (
    <div ref={searchRef} className="relative flex flex-row-reverse items-center xl:flex-row-reverse xl:items-center 2xl:w-[23rem]">
      <div className="flex items-center lg:hidden">
        <button
          onClick={toggleInputVisibility}
          className="px-[0.4rem] py-[0.4rem] bg-primary text-white rounded-full hover:bg-medium_primary focus:outline-none focus:ring-2"
        >
          <IoSearch className="text-[1.7rem] max-[450px]:text-[1.3rem]" />
        </button>
        <div className="relative w-full">
          <form
            onSubmit={handleSearch}
            className={`absolute top-[1rem] mt-6 w-full ml-[-3rem] max-w-xs shadow-md max-[449px]:w-[11rem] xs:w-[12rem] rounded-full focus-within:ring-2 focus-within:ring-primary md:w-[12.5rem] lg:w-[14rem] transition-all duration-500 ease-in-out`}
            style={{
              height: isInputVisible ? "auto" : "0",
              overflow: "hidden",
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className={`w-full px-4 py-2 border max-[450px]:py-[0.4rem] text-gray-700 bg-white rounded-full focus:outline-none transition-opacity duration-500 ease-in-out ${
                isInputVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </form>
          {isInputVisible && showSuggestions && (
            <div className="absolute top-[4rem] w-[12rem] xs:w-[11rem] max-[449px]:w-[11rem] lg:w-[11rem] md:w-[11rem] mt-6 ml-[-2.7rem] bg-white shadow-lg rounded-lg z-50 max-h-60 overflow-y-auto">
              {renderSuggestionsList()}
            </div>
          )}
        </div>
      </div>

      <div className="relative hidden lg:block min-[992px]:w-[13rem] min-[1136px]:w-[17rem] min-[1386px]:w-[20rem] border box-shadow rounded-full focus-within:ring-2 focus-within:ring-primary bg-transparent min-[1400px]:bg-white">
        <form
          onSubmit={handleSearch}
          className="flex items-center w-[100%] rounded-full 3xl:w-[90%] bg-white min-[1400px]:bg-transparent"
        >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className={`px-4 py-[0.4rem] w-full text-black rounded-full focus:outline-none`}
          />
          <button
            type="submit"
            className="px-[.4rem] absolute py-[.4rem] right-0 bg-primary text-white rounded-full hover:opacity-70 focus:outline-none text-[1.6rem]"
          >
            <IoSearch />
          </button>
        </form>
        {showSuggestions && (
          <div className="absolute top-full mt-2 w-[100%] bg-white shadow-lg rounded-lg z-50 max-h-60 overflow-y-auto">
            {renderSuggestionsList()}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;