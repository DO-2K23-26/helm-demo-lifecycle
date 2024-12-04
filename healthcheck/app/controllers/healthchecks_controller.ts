import { healthChecks } from '#start/health'
import type { HttpContext } from '@adonisjs/core/http'

export default class HealthchecksController {
  async index({ response }: HttpContext) {
    const health = await healthChecks.run()
    const check = health.checks[0]
    check.status
    return response.send(health.checks)
  }
}
