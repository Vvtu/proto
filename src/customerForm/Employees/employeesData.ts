// ФИО сотрудника
// Должность  сотрудника
// Является руководителем?
// Документ, удостоверяющий полномочия сотрудника
// Тип контакта сотрудника
// Значение контакта сотрудника
// Логин в ГИС Капиталовложения
// Логин в ЕСИА

export interface EPML_DATA_INTERFACE {
  id: string;
  fio: string;
  position: string;
  isChief: boolean;
  document: string;
  contractType: string;
  contractValue: string;
  loginGis: string;
  loginEsia: string;
}

export const data: EPML_DATA_INTERFACE[] = [
  {
    id: 'id1',
    fio: 'Иванов Сергей Петрович',
    position: 'Генеральный директор',
    isChief: true,
    document: 'устав',
    contractType: 'долгосрочный',
    contractValue: 'постоянный',
    loginGis: 'IvanovSP',
    loginEsia: 'IvanovSP',
  },
  {
    id: 'id2',
    fio: 'Манина Ольга Вячеславна',
    position: 'Главный бухгалтер',
    isChief: false,
    document: 'приказ №5 от 15.01.2018г.',
    contractType: 'долгосрочный',
    contractValue: 'постоянный',
    loginGis: 'ManinaOV',
    loginEsia: 'ManinaOV',
  },
  {
    id: 'id3',
    fio: 'Сергеев Иван Петрович',
    position: 'Заместитель директора',
    isChief: false,
    document: 'приказ №10 от 20.01.2018г.',
    contractType: 'долгосрочный',
    contractValue: 'постоянный',
    loginGis: 'SergIP',
    loginEsia: 'SergIP',
  },
];
