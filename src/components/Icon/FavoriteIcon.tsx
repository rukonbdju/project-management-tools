import React from 'react';
import type { SVGProps } from 'react';

export function MiFavorite(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2.5a1 1 0 0 1 .894.553l2.58 5.158l5.67.824a1 1 0 0 1 .554 1.706l-4.127 4.024l.928 5.674a1 1 0 0 1-1.455 1.044L12 18.807l-5.044 2.676a1 1 0 0 1-1.455-1.044l.928-5.674l-4.127-4.024a1 1 0 0 1 .554-1.706l5.67-.824l2.58-5.158A1 1 0 0 1 12 2.5m0 3.236l-1.918 3.836a1 1 0 0 1-.75.543l-4.184.608l3.05 2.973a1 1 0 0 1 .289.878L7.8 18.771l3.731-1.98a1 1 0 0 1 .938 0l3.731 1.98l-.687-4.197a1 1 0 0 1 .289-.877l3.05-2.974l-4.183-.608a1 1 0 0 1-.75-.543z"></path></svg>);
}