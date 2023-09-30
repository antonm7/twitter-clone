'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// This component is for pages that needs to stay frash every visit.
// Because next 13 does some weird caching, some pages stays with 'outdated' data
// so they needs to be refresh manually, thats not the best fix,but for now ill do the work.  

export function ForceRefresh() {
    const router = useRouter()
    
    useEffect(() => {
        router.refresh();
        console.log('refrash')
    },[]);

    return <></>;
}
