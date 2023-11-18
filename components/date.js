

 import { parseISO, format } from 'date-fns';

 export default function Date({ dateString }) {
   try {
     const date = parseISO(dateString);
     return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
   } catch (error) {
     console.error('Error parsing or formatting date:', error);
     return <div>Error rendering date</div>;
   }
 }