import { CommerceLayer } from '@commercelayer/sdk'
import { authenticate, jwtDecode } from '@commercelayer/js-auth'

const auth = await authenticate('client_credentials', {
    clientId: 'RxogynP5brOxCiTklvcNhB4ouSbH7Dsdzl7bzOnSEtc',
    clientSecret: "e8BV-qYsaeNQWcOSepqW-HXJppQtI2ZW3PzF88SJWN0"
})

const decoded = jwtDecode(auth.accessToken)

const options = {
    organization: decoded.payload.organization.slug,
    accessToken: auth.accessToken
}

export const cl = CommerceLayer(options)
