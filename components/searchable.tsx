"use client";
import { response } from "@/types";
import ListItem from "./ListItem";
import SelectedItem from "./selectedItem";

import React, { useState } from "react";

const SearchableSelection = () => {
  const initialRes: response[] = [
    {
      name: "Sameet Sabu",
      email: "sameetsabu1@zepto.com",
      icon: "/images.jpg",
    },
    {
      name: "Nick Giannopoulus",
      email: "n.giannopoulus@zepto.com",
      icon: "/images.jpg",
    },
    {
      name: "Narayana Garner",
      email: "narayanaG@zepto.com",
      icon: "/images.jpg",
    },
    {
      name: "Anita Gros",
      email: "anitagros@zepto.com",
      icon: "/images.jpg",
    },
    {
      name: "Meghan Smith",
      email: "ms@zepto.com",
      icon: "/images.jpg",
    },
  ];

  const [selectedItems, setSelectedItems] = useState<response[]>([]);
  const [ListItems, setListItems] = useState<response[]>(initialRes);
  const [inputElement, setInputElement] = useState<string>("");

  //Remove selected item//

  const removeSelectedItem = (item: response) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((select) => select !== item)
    );
    setListItems((prevListItems) => [...prevListItems, item]);
  };

  // Add selected item//
  const addSelectedItem = (item: response) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    setListItems((prevListItems) =>
      prevListItems.filter((List) => List !== item)
    );
    setInputElement("");
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputElement(e.target.value);
  };

  const filteredLists = ListItems.filter(
    (list) =>
      list.name.toLowerCase().includes(inputElement.toLowerCase()) &&
      !selectedItems.includes(list)
  );

  return (
    <div className="w-full shadow-sm z-10 bg-white">
      <div className="md:flex mb-1 grid grid-cols-2">
        {selectedItems.map((select) => (
          <SelectedItem
            key={select.email}
            select={select}
            onRemove={() => removeSelectedItem(select)}
          />
        ))}
      </div>
      <input
        className="h-10 w-full border border-black rounded-md mb-1"
        onChange={inputChange}
        value={inputElement}
        placeholder="Search by name"
      />
      <div className="flex flex-col max-h-40 overflow-x-auto shadow-md w-full mb-1 gap-y-3">
        {filteredLists.map((list) => (
          <ListItem
            key={list.email}
            list={list}
            onClick={() => addSelectedItem(list)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchableSelection;
