import {useLayoutEffect} from 'react'

export default function useScrollLock (blockingEvent: boolean) {
        useLayoutEffect(() => {
            const originalStyle = window.getComputedStyle(document.body).overflow
            document.body.style.overflow="hidden"
            return () => {
                document.body.style.overflow = originalStyle
            };
        }, [blockingEvent])

}