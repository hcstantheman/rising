export function ExtractImageUrl(htmlContent: string): string | null {
  const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
  const image = doc.querySelector('img');
  return image ? image.src : null;
}
