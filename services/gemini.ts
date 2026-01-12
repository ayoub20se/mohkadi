
import { GoogleGenAI, Type } from "@google/genai";
import { ReflectionData } from "../types";

export const fetchDailyReflection = async (): Promise<ReflectionData> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Provide a spiritual Islamic reflection for today. Include a Quranic verse (in Arabic), its general meaning, a brief reflection (in Arabic), and one practical action item for the day (in Arabic).",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          verse: { type: Type.STRING, description: "The Quranic verse in Arabic." },
          translation: { type: Type.STRING, description: "Brief translation or meaning of the verse." },
          reflection: { type: Type.STRING, description: "Spiritual reflection in Arabic." },
          actionItem: { type: Type.STRING, description: "Practical action item in Arabic." }
        },
        required: ["verse", "translation", "reflection", "actionItem"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return {
      verse: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "Indeed, with hardship comes ease.",
      reflection: "تذكر دائماً أن ضيق الحال لا يدوم، وأن فرج الله قريب.",
      actionItem: "صلِّ ركعتين بنية قضاء الحاجة والتوكل على الله."
    };
  }
};
