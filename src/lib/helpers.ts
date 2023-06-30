import qs, { type ParsedUrlQuery } from 'querystring'

export const url_parse = (url:string):ParsedUrlQuery => {
    const query =  url?.split('?')[1]
    const parsed = qs.parse(query as string)

    return parsed
}