
export interface Routes {
    route: string,
    title?: string,
    filepathTemplate?: string,
    useLayout?: boolean | string,
    load?: () => void,
    styles?: string[],
    scripts?:string[],
    unload?: ()=>void
}