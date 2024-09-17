import { CommerceLayer } from '@commercelayer/sdk'
import { authenticate, jwtDecode } from '@commercelayer/js-auth'

const auth = await authenticate('client_credentials', {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})

const decoded = jwtDecode(auth.accessToken)

const options = {
    organization: decoded.payload.organization.slug,
    accessToken: auth.accessToken
}

export const cl = CommerceLayer(options)
