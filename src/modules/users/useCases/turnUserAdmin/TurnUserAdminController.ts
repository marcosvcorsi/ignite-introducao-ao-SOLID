import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const userAdmin = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(userAdmin);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
