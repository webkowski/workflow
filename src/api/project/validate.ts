import { Hono } from "hono";
import { openai } from "@ai-sdk/openai";

const app = new Hono();

interface ProjectData {
  name: string;
  description: string;
}

interface ValidationResponse {
  isComplete: boolean;
  missingFields: {
    field: string;
    question: string;
  }[];
}

app.post("/", async (c) => {
  const data: ProjectData = await c.req.json();

  const prompt = `You are a tech lead. Analyze the provided project name and description.
Check if they contain essential project information needed to create roadmap, divide into modules and further estimate tasks:
1. Clear project name
2. Project technology stack
3. Main features and deliverables


If any essential information is missing, generate specific questions to gather that information.
Respond in JSON format:
{
  "isComplete": boolean,
  "missingFields": [
    {
      "field": "string (what information is missing)",
      "question": "string (question to ask the user)"
    }
  ]
}

Project to analyze:
Project Name: ${data.name}
Description: ${data.description}

Analyze the above information and respond with JSON indicating if the project details are complete or what additional information is needed.`;

  try {
    const response = await openai("gpt-4").doGenerate({
      inputFormat: "messages",
      mode: {
        type: "regular"
      },
      prompt: [{
        role: "user",
        content: [{
          type: "text",
          text: prompt
        }]
      }],
      temperature: 0.7,
      maxTokens: 1000,
    });

    if (!response.text) {
      throw new Error("No response from AI");
    }

    const result = JSON.parse(response.text.trim());
    return c.json(result);
  } catch (error) {
    console.error("Validation error:", error);
    return c.json({
      isComplete: false,
      missingFields: [
        {
          field: "Error",
          question: "An error occurred during validation. Please try again."
        }
      ]
    }, 500);
  }
});

export default app;
