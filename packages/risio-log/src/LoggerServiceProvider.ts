import { Application, ServiceProvider, Logger } from '@risio/foundation'

import { IOC } from '.'
import { ConsoleLoggerAdapter } from './adapters/ConsoleLoggerAdapter'
import { LoggerConfig, LoggerType } from './LoggerConfig'

export class LoggerServiceProvider extends ServiceProvider {

    constructor(private config: LoggerConfig) {
        super()
    }

    public register(app: Application): void {
        for (const name in this.config.adapters) {
            if (this.config.adapters.hasOwnProperty(name)) {
                const config = this.config.adapters[name]

                app.ioc.bind<Logger>(IOC.Logger)
                    .toDynamicValue(() => {
                        switch (config.adapter) {
                            case LoggerType.CONSOLE: return new ConsoleLoggerAdapter(config)
                        }
                    })
                    .inSingletonScope()
                    .whenTargetNamed(name)
            }
        }
    }

}
