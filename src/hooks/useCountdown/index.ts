import { useState, useEffect } from 'react';

/**
 * 获取倒计时
 * @param initialCountdown 倒计时（秒）
 * @param onCountdownEnd 倒计时结束时的回调函数
 * @returns 格式化的倒计时字符串
 * @example
 * const countdownString = useCountdown(3600, () => {console.log('结束了')});
 */
const useCountdown = (initialCountdown: number, onCountdownEnd: () => void): string => {
  const [countdown, setCountdown] = useState<number>(initialCountdown);

  useEffect(() => {
    if (countdown <= 0) {
      onCountdownEnd();
      return;
    }

    const countdownInterval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, onCountdownEnd]);

  const formattedCountdown = (): string => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return formattedCountdown();
};

export default useCountdown;
