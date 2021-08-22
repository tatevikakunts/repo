//SUM Возврат суммы элементов массива

const array = [15, 35, 24, 12, -3];

function summary(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(summary(array));

//Schedule
//Сгенерировать штатное расписание. У каждого сотрудника есть два
// свойства (кроме основных) - кол-во отработанных часов и ставка
// одного часа. Вывести расчетную ведомость со списком сотрудников,
// суммы к выплате сотруднику и общим итогом.

function special() {
  const company = createCompany("Zarya", 10);
  const doc = createDoc("DOC", company.staff);
}

function createDoc(title, personnel) {
  return {
    name: title,
    list: createList(personnel),
    total: createTotal(personnel),
  };
}
function createList(list) {
  const rhcp = [];
  for (let i = 0; i < list.length; i++) {
    rhcp.push({
      name: list[i].name,
      salary: list[i].hours * list[i].rate,
    });
  }
  return rhcp;
}

function createTotal(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i].hours * list[i].rate;
  }
  return sum;
}

function createCompany(name, qty) {
  return { name, qty, staff: createStaff(qty) };
}
function createStaff(quantity) {
  const staff = [];
  for (let i = 0; i < quantity; i++) {
    staff.push({
      name: `Employee_${i + 1}`,
      hours: Math.floor(Math.random() * Math.floor(120)),
      rate: 30,
    });
  }
  return staff;
}

special();
