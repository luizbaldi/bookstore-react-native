import { apiKey } from '@/services/keys.json'

/* utils file - all methods MUST be pure */
export const extractData = ({ data }) => data

export const getUrlWithKey = (url: string) => `${url}&key=${apiKey}`
