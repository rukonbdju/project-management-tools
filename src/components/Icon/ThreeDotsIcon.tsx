import React from 'react';
import type { SVGProps } from 'react';

export function ThreeDotsIcon(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={3} d="M12 6h.01M12 12h.01M12 18h.01"></path></svg>);

}