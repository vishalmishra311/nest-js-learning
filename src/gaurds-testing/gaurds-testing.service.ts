import { Injectable } from '@nestjs/common';

@Injectable()
export class GaurdsTestingService {
     nestJsGuardsQuestions = [
        "What are Guards in NestJS?",
        "Why do we use Guards in NestJS?",
        "Difference between Middleware and Guards?",
        "Difference between Guards and Interceptors?",
        "How does CanActivate work?",
        "What is ExecutionContext in NestJS Guards?",
        "How to create a Guard in NestJS?",
        "What is AuthGuard?",
        "How to apply a Guard globally?",
        "How to apply a Guard on a controller?",
        "How to apply a Guard on a specific route?",
        "What is the use of @UseGuards() decorator?",
        "How JWT authentication is implemented using Guards?",
        "How to access request object inside a Guard?",
        "How to return true or false from a Guard?",
        "What happens if a Guard returns false?",
        "Can multiple Guards be used together?",
        "Order of execution of Middleware, Guards, Interceptors, and Pipes?",
        "How role-based authorization works using Guards?",
        "What is Reflector in NestJS?",
        "How to create RolesGuard in NestJS?",
        "Difference between Authentication and Authorization?",
        "How to skip a Guard for a public route?",
        "What are custom decorators with Guards?",
        "How Passport works with NestJS Guards?"
    ];

    gaurdInterviewQuestion(){
        return this.nestJsGuardsQuestions
    }
}
