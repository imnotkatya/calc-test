
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    let a = ''; // Первое число
    let b = ''; // Второе число
    let sign = ''; // Знак операции
    let theme = false; // Переменная для темы (по умолчанию светлая)
  
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const action = ['+', '-', 'X', '/'];
    const out = document.querySelector('.screen p');
    const calcContainer = document.querySelector('.calc-container'); // Ссылка на контейнер для темы
    const themeButton = document.querySelector('.theme'); // Кнопка для смены темы
  
    function clearAll() {
      a = '';
      b = '';
      sign = '';
      out.textContent = 0;
    }
  
    document.querySelector('.ac').onclick = clearAll;
  
    document.querySelector('.buttons').onclick = (event) => {
      if (!event.target.classList.contains('btn')) return;
      if (event.target.classList.contains('ac')) return;
  
      const key = event.target.textContent.trim();
  
      // Если нажата цифра
      if (digit.includes(key)) {
        if (b === '' && sign === '') {
          a += key;
          out.textContent = a;
        } else if (a !== '' && sign !== '') {
          b += key;
          out.textContent = b;
        }
        console.log(a, b, sign);
        return;
      }
  
      // Если нажата операция
      if (action.includes(key)) {
        sign = key === 'X' ? '*' : key; // Исправляем "X" на "*"
        out.textContent = sign;
        console.log(a, b, sign);
        return;
      }
  
      // Если нажата "="
      if (key === '=') {
        if (a === '' || b === '' || sign === '') return;
  
        let result;
        switch (sign) {
          case '+':
            result = Number(a) + Number(b);
            break;
          case '-':
            result = Number(a) - Number(b);
            break;
          case '*':
            result = Number(a) * Number(b);
            break;
          case '/':
            result = b === '0' ? 'Ошибка' : Number(a) / Number(b);
            break;
          default:
            return;
        }
  
        out.textContent = result;
        a = result.toString();
        b = '';
        sign = '';
  
        console.log('Результат:', result);
      }
  
      // Если нажата "+/-"
      if (event.target.classList.contains('plus-minus')) {
        if (b === '' && sign === '') {
          a = a.startsWith('-') ? a.slice(1) : '-' + a;
          out.textContent = a;
        } else if (b !== '') {
          b = b.startsWith('-') ? b.slice(1) : '-' + b;
          out.textContent = b;
        }
      }
  
      // Если нажата "%"
      if (event.target.classList.contains('percent')) {
        if (b === '' && sign === '') {
          a = (Number(a) / 100).toString();
          out.textContent = a;
        } else if (b !== '') {
          b = (Number(b) / 100).toString();
          out.textContent = b;
        }
      }
    };
  
    // Обработчик для кнопки смены темы
    themeButton.addEventListener('click', () => {
      theme = !theme; // Переключаем значение переменной theme
      if (theme) {
        calcContainer.classList.remove('dark-theme');
        calcContainer.classList.add('light-theme');
      } else {
        calcContainer.classList.remove('light-theme');
        calcContainer.classList.add('dark-theme');
      }
    });
  });
  



