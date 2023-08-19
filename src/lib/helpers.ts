import qs, { type ParsedUrlQuery } from 'querystring'
import type { RefObject } from 'react'

export const url_parse = (url:string):ParsedUrlQuery => {
    const query =  url?.split('?')[1]
    const parsed = qs.parse(query as string)

    return parsed
}

export const avoid_wrapper  = (event:React.MouseEvent,componentRef:RefObject<HTMLDivElement>):boolean => {
    if ( componentRef.current && event.target instanceof Node &&
        !componentRef.current.contains(event.target)) {
        // if the click happens inside the div element
        return true
    } else {
        return false
    }
};