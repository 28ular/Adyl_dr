import React, { useState } from "react";
import '../ui/greet.css'
import {useNavigate} from "react-router-dom";

// const [input , setInput] = useState("");

export const GreetPage = () => {
    const [hearts, setHearts] = useState([]);

    const navigate = useNavigate();

    const handleClick = () => {
        const newHearts = Array.from({ length: 38 }).map(() => ({
            id: Math.random(),
            left: Math.random() * window.innerWidth,
            size: 10 + Math.random() * 20,
            duration: 3 + Math.random() * 2
        }));
        setHearts(newHearts);
        // удалить сердечки через максимальное время анимации
        setTimeout(() => setHearts([]), 5000);
    };

    return (
        <div className="greet">
            <div className="greet_container">
                <div className="greet_inner">
                    <div className="heart"></div>
                    <p style={{marginTop:'100px'}}>Адылхан, брат, поздравляю тебя с днём рождения!
                        Тебе уже 13 лет — новый уровень, новая энергия, новое начало.
                        Желаю силы, уверенности, мужества и больших побед.
                        Желаю, чтобы вокруг всегда были верные друзья и крутые моменты.

                        И знай — скинхеды уже ждут тебя, так что готовься</p>
                    <button onClick={handleClick}>Нажми если крутой</button>
                    {hearts.map(h => (
                        <div
                            key={h.id}
                            className="floating-heart"
                            style={{
                                left: h.left,
                                width: h.size,
                                height: h.size,
                                animationDuration: `${h.duration}s`
                            }}
                        ></div>
                    ))}
                    <button onClick={() => navigate(-1)}>вернутся к проверке</button>

                </div>
            </div>
        </div>
    );
};
