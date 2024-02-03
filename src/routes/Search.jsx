import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, SearchBox , useConnector } from "react-instantsearch";
import connectVoiceSearch from 'instantsearch.js/es/connectors/voice-search/connectVoiceSearch';
import Hit from "../components/Hit";


export function useVoiceSearch(props) {
  return useConnector(connectVoiceSearch, props);
}

export function VoiceSearch(props) {
  const {
    isBrowserSupported,
    isListening,
    toggleListening,
    voiceListeningState,
  } = useVoiceSearch(props);

  return <><i className="fa-solid fa-magnifying-glass"></i></>;
}

const Search = () => {
  const searchClient = algoliasearch(
    "MBH9RKFWND",
    "a9bf197d578face5a4608ff84e2818b3"
  );

  return (
   
      <InstantSearch searchClient={searchClient} indexName="products" >
        <SearchBox 
        classNames={{
          root: 'p-3 shadow-sm',
          form: 'relative',
          input: ' block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
          submitIcon: 'absolute inset-y-2.5 left-0 w-6',
          resetIcon:'focus:bg-'
        }}
        placeholder="search here . . ."
        searchAsYouType={true}
        submitIconComponent={({ classNames }) => (
          <div className={classNames.submitIcon}><i class="fa-solid fa-magnifying-glass"></i></div>
        )}
        resetIconComponent={({ classNames }) => (
          <div className={classNames.resetIcon}>Reset</div>
        )}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
  
  );
};
export default Search;
