import React from 'react'
import { useRouter } from 'next/router'
import { useParams } from 'common/hooks'


export default function Invalid() {
const { id} = useParams()
const message:any={"1":"no jwt present","2":"invalid jwt","3":"jwt expired"}
  return (
    <div>
        {(id && message[id!])?message[id!]:"something went wrong"}
      
    </div>
  )
}
