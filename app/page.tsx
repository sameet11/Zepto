import SearchableSelection from "@/components/searchable";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#2C024C] h-screen">
      <h1 className="font-bold md:text-6xl text-3xl bg-clip-text text-transparent bg-gradient-to-b from-[#EE3F67] to-[#F15F58] mb-5">
        Welcome to Zepto!
      </h1>
      <SearchableSelection />
    </div>
  );
};

export default App;
