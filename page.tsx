import { useState, useMemo } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  // useMemo para calcular el tamaño del botón "Sí" basado en noCount.
  const yesButtonSize = useMemo(() => noCount * 20 + 16, [noCount]);

  // Función para manejar clics en el botón "No".
  // Evita incrementar noCount más allá del número de frases disponibles.
  const handleNoClick = () => {
    if (noCount < phrases.length - 1) {
      setNoCount(noCount + 1);
    }
  };

  // useMemo para obtener el texto del botón "No" y evitar cálculos innecesarios.
  const noButtonText = useMemo(() => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  }, [noCount]);

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
              style={{ fontSize: `${yesButtonSize}px` }} // Ajustado para usar px
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noButtonText}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
