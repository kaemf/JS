alert("Завдання 1.1");

let xx = prompt("Введіть двух значне число");

function num_to_String(num) {
    let f = ['Один', 'Два', 'Три', 'Чотири', 'Пʼять', 'Шість', 'Сім', 'Вісім', 'Девʼять'];
    let s = ['Десять', 'Одинадцать', 'Дванадцать', 'Тринадцать', 'Чотирнадцать', 'Пʼятнадцять', 'Шістнадцять', 'Сімнадцять', 'Вісімнадцять', 'Девʼяднадцать', 'Двадвать'];
    let t = ['Двадцять', 'Тридцять', 'Сорок', 'Пʼятдесят', 'Шістдесят', 'Сімдесят', 'Вісімдесят', 'Девʼяносто'];
    if (num > 0 && num <= 9) {
      return f[num - 1];
    }
    if (num >= 10 && num <= 20) {
      return s[num - 10];
    }
    if (num > 20 && num <= 99) {
      let str = `${num}`;
      str = str.split('');
      let fnum = str[0];
      let snum = str[1];
      return `${t[fnum - 2]} ${f[snum - 1].toLocaleLowerCase()}`;
    }
}
alert("'" +xx +"'  -  " +num_to_String(xx));