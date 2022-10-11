import React from 'react'
import '../stylesheets/Footer.css'

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='footer-medios'>
        <h3>Medios de pago</h3>
          <div className='container-img-medios'>
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mercadopago.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mastercard.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/visa.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/american-express.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/naranja.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/cabal.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/maestro.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/diners-club.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/nativa.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/argencard.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/pagofacil.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/rapipago.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/efectivo.png" alt="Medio Pago"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/acordar.png" alt="Medio Pago"/>
          </div>

        <h3>Medios de envio</h3>
          <div className="container-img-medios">
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/e-pick.png" alt="Medio Envio"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/correo-argentino.png" alt="Medio Envio"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/personalizado.png" alt="Medio Envio"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/retiro-local.png" alt="Medio Envio"/> 
            <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/acordar.png" alt="Medio Envio"/> 
          </div>
      </div>
      <div className='footer-redes-contacto'>
        <h3>Nuestras redes sociales</h3>
          <div className='container-redes'>
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i className="fa-brands fa-square-facebook"></i>
            </div>
          </div>
        <h3>Contacto</h3>
          <div className='footer-contacto'>
            <p><i className='fa-solid fa-phone'></i>1128852984</p>
            <p><i className='fa-solid fa-at'></i>hypecity00@gmail.com</p>
          </div>
      </div>
    </div>
  )
}

export default Footer