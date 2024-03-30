import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { CurrentUserPipe } from "../pipe";

const GetCurrentId = createParamDecorator((_: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().session.userId;
});

export const GetCurrentUser = () => GetCurrentId(CurrentUserPipe);
