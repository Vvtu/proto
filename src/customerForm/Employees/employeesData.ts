// ФИО сотрудника
// Должность  сотрудника
// Является руководителем?
// Документ, удостоверяющий полномочия сотрудника
// Тип контакта сотрудника
// Значение контакта сотрудника
// Логин в ГИС Капиталовложения
// Логин в ЕСИА

export const data = [
  {
    fio: 'Иванов Сергей Петрович',
    position: 'Генеральный директор',
    isChief: true,
    document: 'устав',
    contractType: 'долгосрочный',
    contractValue: 'постоянный',
    loginGis: 'IvanovSP',
    LoginEsia: 'IvanovSP',
  },
  {
    fio: 'Манина Ольга Вячеславна',
    position: 'Главный бухгалтер',
    isChief: false,
    document: 'приказ №5 от 15.01.2018г.',
    contractType: 'долгосрочный',
    contractValue: 'постоянный',
    loginGis: 'ManinaOV',
    LoginEsia: 'ManinaOV',
  },
  {
    fio: 'Сергеев Иван Петрович',
    position: 'Заместитель директора',
    isChief: false,
    document: 'приказ №10 от 20.01.2018г.',
    contractType: 'долгосрочный',
    contractValue: 'постоянный',
    loginGis: 'SergIP',
    LoginEsia: 'SergIP',
  },
];
