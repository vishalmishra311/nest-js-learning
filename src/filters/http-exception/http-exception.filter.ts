import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response ,Request} from 'express';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log("hitting exception")
    const ctx = host.switchToHttp();// we are telling to nest we are working upon req/res
    const response = ctx.getResponse<Response>()
    console.log("response----",response)
    const request = ctx.getRequest<Request>();
    console.log("request----",request)
    const status = exception.getStatus();
    console.log("status----",status)

     response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message
  })
  }
}
