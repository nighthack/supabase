import React,{createContext,useEffect,useState,useContext} from 'react'
import { useRouter } from 'next/router'

export interface UrlContextProps {
  schema:string,
}
  
export const Context = createContext<UrlContextProps>({schema:''});

export function useUrlParamContext(): UrlContextProps {
  return useContext(Context);
}

export const UrlStateProvider: React.FC = ({ children }) => {
  
  const [schema,setSchema]=useState('')
  const router = useRouter()
    useEffect(()=>{
const queryParams = new URLSearchParams(window.location.search);
const hasParam = queryParams.has('jwt');
// const queryValue = queryParams.get('query');
const jwtParam=queryParams.get('jwt');
// console.log("param test _app",{hasParam,queryValue})
    if(hasParam&&jwtParam){
        if (jwtParam){
          console.log("in jwt param",jwtParam)
          fetch("/api/jwtAuthenticate",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(jwtParam)
          }).then(data=>{
            if (data.status==200){
              return data.text()
            }else{
              console.log(data.text())
              router.push(`/invalid/${2}`)
              data.text().then(data=>{throw Error(data)})
            }
          }).then(data=>{
            let user=JSON.parse(data||"")
            console.log(user,typeof user,"success")
            setSchema(user?.role)
          }).catch(err=>{
          console.log("Error",err.message)}) 
        }
        
    }else{
      setSchema("public")
      // router.push(`/invalid/${1}`)
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