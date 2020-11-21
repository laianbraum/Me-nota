import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Subject from '../models/subject';

export default{
  async create(request: Request, response: Response){
    const {
      name,
    } = request.body;
  
    const subjectRepository = getRepository(Subject);
  
    const subject = subjectRepository.create({
      name,
    });
    
    await subjectRepository.save(subject);

    return response.status(201).json({message: "subject created"});
  },

  async index(request: Request, response: Response){
    const subjectRepository = getRepository(Subject);

    const allsubject = await subjectRepository.find();

    return response.json(allsubject);
  },

  async delete(request: Request, response: Response){
    const { id } = request.params;

    const subjectRepository = getRepository(Subject);

    const deleteSubject = await subjectRepository.delete(id);

    return response.json(deleteSubject);
  }
}