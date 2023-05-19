export function randomNumber(min: number, max: number) {
   return Math.floor(Math.random() * (max - min)) + min;
}

export function getHost(): string {
   if (process.env.NODE_ENV === 'production') {
      // if you are hosting a http website use http instead of https
      return `https://www.coocobolo.com`;
   }

   return 'http://localhost:3000';
}

export function getTimeToRead(text: string, wordsPerMinute: number): number {
   const wordCount = text.split(/\s+/g).length;
   const minutesToRead = wordCount / wordsPerMinute;

   return Math.ceil(minutesToRead);
}

export function range(start: number, end?: number, step = 1) {
   let output = [];
   if (typeof end === 'undefined') {
      end = start;
      start = 0;
   }
   for (let i = start; i < end; i += step) {
      output.push(i);
   }
   return output;
}
