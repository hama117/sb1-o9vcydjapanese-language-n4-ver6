import OpenAI from 'openai';
import { Language, ExplanationResponse } from '../types';
import { languagePrompts } from './prompts';

export async function getExplanation(
  question: string,
  context: string,
  userAnswer: number,
  correctAnswer: number,
  language: Language,
  apiKey: string
): Promise<ExplanationResponse> {
  const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
  const isCorrect = userAnswer === correctAnswer;
  const langPrompt = languagePrompts[language];

  const prompt = `
あなたは日本語教師です。以下のJLPT問題について、${language}で説明してください。

問題文: ${question}
文脈: ${context}
学習者の回答: ${userAnswer}
正解: ${correctAnswer}

説明のガイドライン:
1. 以下の形式で説明を構成してください：
${langPrompt.format}

2. 説明の要件：
- 各セクションは明確に分けて記述
- 箇条書き（•）を使用して要点を示す
- 選択肢の分析は番号付きで示す
- 文法・語彙のポイントを含める
- 実践的な使用例を提供
- 学習者の理解を深める補足説明を加える

3. 重要な注意点：
- 説明は簡潔かつ分かりやすく
- 専門用語は必要最小限に
- 実用的な例文を含める
- 関連する文法・語彙項目への言及
`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    max_tokens: 800,
    presence_penalty: 0.1,
    frequency_penalty: 0.1,
  });

  return {
    isCorrect,
    explanation: `${isCorrect ? langPrompt.correct : langPrompt.incorrect}\n\n${response.choices[0]?.message?.content || ''}`,
  };
}