import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { QUIZ_DATA, Question } from "./data";

const App = () => {
  const [screen, setScreen] = useState<"start" | "quiz" | "result">("start");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const startQuiz = (fullMode: boolean) => {
    let questionsToPlay: Question[] = [];
    if (fullMode) {
      // Usa todas as 100 questões na ordem original
      questionsToPlay = [...QUIZ_DATA];
    } else {
      // Sorteia 10 questões aleatórias (Modo Desafio)
      questionsToPlay = [...QUIZ_DATA].sort(() => 0.5 - Math.random()).slice(0, 100);
    }
    
    setCurrentQuestions(questionsToPlay);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setScreen("quiz");
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestions[currentIndex].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
    } else {
      setScreen("result");
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      {screen === "start" && (
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-xl w-full text-center border border-slate-200 animate-fade-in">
          <div className="text-6xl mb-6">📐</div>
          <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight uppercase">Master UML</h1>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Aprenda modelagem com nosso banco completo de <span className="font-bold text-indigo-600">100 questões</span> extraídas do material oficial.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => startQuiz(true)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 px-8 rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl text-xl flex items-center justify-center gap-2"
            >
              Maratona (Todas as 100)
            </button>
            <button 
              onClick={() => startQuiz(false)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-8 rounded-2xl transition-all shadow-md text-lg"
            >
              Desafio Rápido (10 Aleatórias)
            </button>
          </div>
        </div>
      )}

      {screen === "quiz" && (
        <div className="w-full max-w-4xl animate-fade-in flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Questão {currentIndex + 1} de {currentQuestions.length}
              </span>
              <span className="text-slate-500 font-bold text-sm">Acertos: {score}</span>
            </div>
            <div className="bg-slate-200 h-3 w-full rounded-full overflow-hidden border border-slate-300 shadow-inner">
              <div 
                className="bg-indigo-500 h-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                style={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-tight">
                {currentQuestions[currentIndex].question}
              </h2>

              <div className="space-y-4">
                {currentQuestions[currentIndex].options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = currentQuestions[currentIndex].correctIndex === idx;
                  const reveal = selectedAnswer !== null;

                  let btnStyle = "w-full text-left p-5 rounded-2xl border-2 font-medium transition-all flex items-center gap-4 group ";
                  if (!reveal) {
                    btnStyle += "border-slate-100 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 hover:shadow-md";
                  } else {
                    if (isCorrect) btnStyle += "border-green-500 bg-green-50 text-green-800 ring-4 ring-green-100";
                    else if (isSelected) btnStyle += "border-red-500 bg-red-50 text-red-800";
                    else btnStyle += "border-slate-50 text-slate-300 opacity-40";
                  }

                  return (
                    <button 
                      key={idx} 
                      onClick={() => handleAnswer(idx)}
                      disabled={reveal}
                      className={btnStyle}
                    >
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-black transition-colors ${
                        reveal && isCorrect ? "bg-green-600 text-white" : 
                        reveal && isSelected ? "bg-red-600 text-white" : 
                        "bg-slate-100 text-slate-500 group-hover:bg-indigo-500 group-hover:text-white"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-lg leading-snug">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {selectedAnswer !== null ? (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <div className={`p-6 rounded-3xl border shadow-sm ${
                    selectedAnswer === currentQuestions[currentIndex].correctIndex 
                    ? "bg-green-100 border-green-300" 
                    : "bg-red-100 border-red-300"
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xl font-bold ${selectedAnswer === currentQuestions[currentIndex].correctIndex ? "text-green-700" : "text-red-700"}`}>
                        {selectedAnswer === currentQuestions[currentIndex].correctIndex ? "✅ Correto!" : "❌ Opção Errada"}
                      </span>
                    </div>
                    <p className={`text-sm font-medium leading-relaxed ${selectedAnswer === currentQuestions[currentIndex].correctIndex ? "text-green-900" : "text-red-900"}`}>
                      {currentQuestions[currentIndex].explanations[selectedAnswer]}
                    </p>
                  </div>

                  {selectedAnswer !== currentQuestions[currentIndex].correctIndex && (
                    <div className="p-6 rounded-3xl bg-green-100 border border-green-300 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-green-700">💡 Resposta Certa:</span>
                        <span className="font-black text-green-800">Opção {String.fromCharCode(65 + currentQuestions[currentIndex].correctIndex)}</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-green-900">
                        {currentQuestions[currentIndex].explanations[currentQuestions[currentIndex].correctIndex]}
                      </p>
                    </div>
                  )}

                  <button 
                    onClick={nextQuestion}
                    className="w-full bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl flex items-center justify-center gap-3 text-lg mt-2"
                  >
                    {currentIndex === currentQuestions.length - 1 ? "Ver Resultado" : "Próxima Questão"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="bg-slate-200/50 border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center p-12 text-center text-slate-400 min-h-[300px]">
                  <div className="text-5xl mb-4 opacity-30">🔍</div>
                  <p className="font-bold text-lg">Responda para ler a explicação técnica detalhada de cada opção.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {screen === "result" && (
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl max-w-xl w-full text-center border border-slate-200 animate-fade-in">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-xl text-white">
            🎯
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">Fim do Teste!</h2>
          <p className="text-slate-500 mb-8 text-lg">Desempenho no banco de questões UML:</p>
          
          <div className="mb-10 relative inline-block">
            <div className="text-8xl font-black text-indigo-600 mb-2">
              {Math.round((score / currentQuestions.length) * 100)}%
            </div>
            <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full font-black text-sm uppercase tracking-tighter">
              {score} de {currentQuestions.length} acertos
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 italic text-slate-600 text-lg leading-relaxed">
            "{score / currentQuestions.length >= 0.8 ? "Nível Sênior! Você entende profundamente a linguagem UML." : 
              score / currentQuestions.length >= 0.6 ? "Nível Pleno. Conhecimento sólido, mas atenção aos detalhes técnicos." : 
              "Continue estudando. A modelagem é essencial para a arquitetura de software de qualidade."}"
          </div>

          <button 
            onClick={() => setScreen("start")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl transition-all shadow-xl text-xl uppercase tracking-widest"
          >
            Voltar ao Menu
          </button>
        </div>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
