import { navigateToUrl } from 'single-spa'

export const Link: React.FC<{ url: string; children: React.ReactNode }> = ({ url, children }) => {
  return (
    <>
      <a href={url} onClick={() => navigateToUrl(url)}>
        {children}
      </a>
    </>
  )
}
