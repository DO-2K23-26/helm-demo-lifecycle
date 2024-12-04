import type { HttpContext } from '@adonisjs/core/http'

export default class HealthchecksController {
  index({ response }: HttpContext) {
    return response.status(200).json({
      status: 'ok',
    })
  }
}
