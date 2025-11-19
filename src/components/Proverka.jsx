import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../proverka.css'
export const Proverka = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const HndleClick = () => {
        if (input === "Адылхан") {
            navigate('/greet');
        } else {
            alert("Неверный ввод");
        }
    };

    return (
        <div className="proverka">
            <p>
                Здравствуйте! Это сайт исключительно для Адыла.
                Чтобы пройти дальше — введите его полное имя с большой буквы:
            </p>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={HndleClick}>Проверить</button>
        </div>
    );
};
