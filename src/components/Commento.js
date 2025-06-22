import { useEffect } from 'react'

export default function Commento({ id }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.commento.io/js/commento.js'
    script.async = true
    script.setAttribute('data-id', id)
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [id])

  return <div id="commento"></div>
}