import { Request, Response } from "express";

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.headers;
  }
}

export { RefreshTokenController };
