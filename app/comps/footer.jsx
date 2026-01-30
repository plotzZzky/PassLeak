'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "@comps/footer.css"


export default function Footer() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const siteDesc = process.env.NEXT_PUBLIC_SITE_DESC;

  return (
    <footer>
      <header>
        
        <h3>
          {siteName}
        </h3>

        <span>
          {siteDesc}
        </span>

      </header>

      <div>
        <p> Contatos: </p>

        <span className="email">
          <FontAwesomeIcon icon={faEnvelope}/>
          passleak@contato.net
        </span>
      </div>

    </footer>
  )
}