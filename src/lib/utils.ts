import axios, { AxiosResponse } from 'axios';
import confetti from 'canvas-confetti';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductType } from '~/Types';



export const fetcher = async <T>(url: string): Promise<T> => {
    const res: AxiosResponse<T> = await axios.get(url);
    return res.data;
};

export const shootFireworks = (): void => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}



export const notifyMsg = (msg: string): void => {
    toast.success(msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    });
};