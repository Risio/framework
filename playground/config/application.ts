import * as path from 'path'
import { Application, ApplicationConfig, env } from '@risio/foundation'

export const applicationConfig = Application.createConfigObject<ApplicationConfig>({
    env: env('ENV', 'development'),
    url: env('APP_URL', 'http://localhost:3000'),
    serverUrl: env('APP_SERVER_URL', 'http://localhost:5000'),
    port: env('PORT', 5000),
    key: env('SECRET', 'this-is-not-a-secret'),
    basePath: path.join(__dirname, '..')
})
