/** @type {import('./$types').PageLoad} */
export function load({ url }) {
    let days = url.searchParams.get('days');
    let chapters = url.searchParams.get('chapters')
  return { 
    days,
    chapters
  };
}