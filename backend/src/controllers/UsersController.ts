import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import User from '../models/User';

export default class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const usersRepository = getRepository(User);

    const { name, surname, birth, responsability, salary } = req.body;

    const user = usersRepository.create({
      name,
      surname,
      birth,
      responsability,
      salary,
    });

    await usersRepository.save(user);

    return res.json(user);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, surname, responsability, salary, birth } = req.body;

    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne(id);

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    userExists.name = name;
    userExists.birth = birth;
    userExists.surname = surname;
    userExists.salary = salary;
    userExists.responsability = responsability;

    const updatedUser = await usersRepository.save(userExists);

    return res.json(updatedUser);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    await usersRepository.remove(user);

    return res.json();
  }
}
