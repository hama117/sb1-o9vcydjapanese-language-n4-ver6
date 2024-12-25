import { Language } from '../types';

interface LanguagePrompt {
  correct: string;
  incorrect: string;
  format: string;
}

export const languagePrompts: Record<Language, LanguagePrompt> = {
  ja: {
    correct: '✨ 正解です！',
    incorrect: '❌ 残念ながら不正解です。',
    format: `
問題のポイント:
• 問題の種類（文法・語彙・読解など）
• 問題で問われている能力や知識

文の意味:
• 問題文の説明
• 重要な文脈や状況の説明
• キーワードや重要表現の説明

選択肢の確認:
1. 選択肢1の説明
2. 選択肢2の説明
3. 選択肢3の説明
4. 選択肢4の説明

正しい答え:
• 正解の選択肢番号
• なぜその答えが正しいのか
• 他の選択肢が不適切な理由

学習のポイント:
• この問題から学べる文法・語彙のポイント
• 日常生活での使用例
• 類似の表現や関連する学習項目
`
  },
  en: {
    correct: '✨ Correct!',
    incorrect: '❌ Incorrect.',
    format: `
Key Points:
• Type of question (grammar, vocabulary, reading, etc.)
• Skills and knowledge being tested

Meaning:
• Explanation of the question
• Important context and situation
• Keywords and key expressions

Analysis of Options:
1. Explanation of option 1
2. Explanation of option 2
3. Explanation of option 3
4. Explanation of option 4

Correct Answer:
• Number of the correct option
• Why this answer is correct
• Why other options are inappropriate

Learning Points:
• Grammar/vocabulary points from this question
• Usage in daily life
• Similar expressions and related study points
`
  },
  // 他の言語も同様に定義
  zh: { correct: '', incorrect: '', format: '' },
  vi: { correct: '', incorrect: '', format: '' },
  id: { correct: '', incorrect: '', format: '' },
  th: { correct: '', incorrect: '', format: '' }
};