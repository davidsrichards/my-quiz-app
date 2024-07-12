import express from "express";
import { data } from "../data/data.mjs";
import { answers } from "../data/data.mjs";
import { Question } from "../QuizSchem/QuizSchema.mjs";
import { Result } from "../result-schema/ResultSchema.mjs";

const quizRouts = express.Router();

/// getting all questions

quizRouts.get("/api/user/quiz/question", async (req, res) => {
  try {
    const allQuestions = await Question.find();
    res.status(200).json(allQuestions);
  } catch (error) {
    return res.json(error);
  }
});

// inseting questions

quizRouts.post("/api/user/quiz/question/new", async (req, res) => {
  const { data, answers } = req.body;
  try {
    const newQuestion = new Question({
      questions: data,
      answers: answers,
    });
    const savedQuestions = await newQuestion.save();
    res.json(savedQuestions);
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
});

/// inserting results

quizRouts.post("/api/user/quiz/result/new", async (req, res) => {
  const { body } = req;
  try {
    const newResult = new Result(body);
    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

export default quizRouts;
