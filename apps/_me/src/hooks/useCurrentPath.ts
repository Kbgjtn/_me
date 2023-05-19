import { getHost } from '@/helpers';
import { useRouter } from 'next/router';

export default function useCurrentUrl() {
   const { pathname } = useRouter();

   return `${getHost()}${pathname}`;
}
