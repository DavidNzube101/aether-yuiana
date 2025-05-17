import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
    
    now: Date = new Date();

    @Get('get-status')
    getStatus(): object {
        return {
            "message" : "Service works",
            "datetime": this.now
        }
    }
}
