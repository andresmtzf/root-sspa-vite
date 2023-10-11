import logo from '../assets/media/logos/logo.png'
import { BrowserRouter, NavLink } from 'react-router-dom'

export const links = [
  {
    name: 'Contactos',
    href: '/contactos',
  },
  {
    name: 'Comercial',
    href: '/comercial',
  },
  {
    name: 'Facturación',
    href: '/facturacion',
  },
  {
    name: 'Finanzas',
    href: '/finanzas',
  },
]

export const Header = () => {
  return (
    <>
      <BrowserRouter>
        <div id='hdr'>
          <header className='bd-header bg-ui-slate text-dark bg-opacity-50 py-3 d-flex align-items-stretch border-bottom'>
            <div className='container-fluid d-flex align-items-center justify-content-center'>
              <h1 className='d-flex align-items-center fs-4 mb-0'>
                <img src={logo} width='100' height='30' className='me-3' alt='Unuhi' />
              </h1>
              <div className=''>
                <ul className='nav nav-pills'>
                  {links.map((l) => (
                    <li className='nav-item'>
                      {/* `nav-link ${l.name !== 'Contactos' ? 'disabled' : ''}` */}
                      <NavLink
                        className={({ isActive }) =>
                          `nav-link ${l.name !== 'Contactos' ? 'disabled' : ''} ${
                            isActive ? 'active bg-ui-slate' : ''
                          }`
                        }
                        to={l.href}>
                        {l.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>
        </div>
      </BrowserRouter>
    </>
  )
}
