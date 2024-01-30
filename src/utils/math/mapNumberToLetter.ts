/**
 * 获取选项映射
 * @description 输入 0 返回 A，输入  1 返回 B，输入 2 返回 C。以此类推
 *
 * @param number 数字：0-25
 *
 * @author GmhLovEDM
 * @date 2024-01-22 16:17:00
 */
const mapNumberToLetter = (number: number) => {
  if (number >= 0 && number <= 25) {
    // 65 是 'A' 的 ASCII 码
    return String.fromCharCode(65 + number);
  } else {
    return 'Invalid number, must be between 0 and 25 inclusive.';
  }
};

export default mapNumberToLetter;
