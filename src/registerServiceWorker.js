import { registerSW } from 'virtual:pwa-register'

if (import.meta.env.PROD) {
  registerSW({
    onRegisterError(error) {
      console.error('Service worker registration failed:', error)
    },
  })
}
