import React from 'react';
import type { SVGProps } from 'react';

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M16 4C9.373 4 4 9.373 4 16c0 2.165.572 4.193 1.573 5.945a1 1 0 0 1 .094.77l-1.439 5.059l5.061-1.44a1 1 0 0 1 .77.094A11.94 11.94 0 0 0 16 28c6.628 0 12-5.373 12-12S22.628 4 16 4M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14c-2.368 0-4.602-.589-6.56-1.629l-5.528 1.572A1.5 1.5 0 0 1 2.06 28.09l1.572-5.527A13.94 13.94 0 0 1 2 16m8-3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></path></svg>);
}