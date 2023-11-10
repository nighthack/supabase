import React,{createContext,useEffect,useState,useContext} from 'react'


export interface UrlContextProps {
    schema:string,
  }
  
export const Context = createContext<UrlContextProps>({schema:''});

export function useUrlParamContext(): UrlContextProps {
    return useContext(Context);
  }

export const UrlStateProvider: React.FC = ({ children }) => {

    const [schema,setSchema]=useState('')
    useEffect(()=>{
const queryParams = new URLSearchParams(window.location.search);
const hasParam = queryParams.has('query');
const queryValue = queryParams.get('query');
console.log("param test _app",{hasParam,queryValue})
    if(hasParam){
        setSchema(queryValue!)
    }
},[])
    const value = {
        schema
    };
  
    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    );

    }