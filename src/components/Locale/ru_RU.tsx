/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../LocaleProvider';
import DatePicker from '../DateTimePicker/DatePicker/Locale/ru_RU';
import Dialog from '../Dialog/BaseDialog/Locale/ru_RU';
import InfoBar from '../InfoBar/Locale/ru_RU';
import Pagination from '../Pagination/Locale/ru_RU';
import Panel from '../Panel/Locale/ru_RU';
import Stepper from '../Stepper/Locale/ru_RU';
import Table from '../Table/Locale/ru_RU';
import TimePicker from '../DateTimePicker/TimePicker/Locale/ru_RU';
import Upload from '../Upload/Locale/ru_RU';

const typeTemplate: string = '${label} не является типом ${type}';

const localeValues: Locale = {
  locale: 'ru',
  global: {
    placeholder: 'Пожалуйста выберите',
  },
  DatePicker,
  Dialog,
  Form: {
    defaultValidateMessages: {
      default: 'Ошибка проверки поля ${label}',
      required: 'Пожалуйста, введите ${label}',
      enum: '${label} должен быть одним из [${enum}]',
      whitespace: '${label} не может быть пустым',
      date: {
        format: '${label} не правильный формат даты',
        parse: '${label} не может быть преобразовано в дату',
        invalid: '${label} не является корректной датой',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label} должна быть ${len} символов',
        min: '${label} должна быть больше или равна ${min} символов',
        max: '${label} должна быть меньше или равна ${max} символов',
        range: 'Длина ${label} должна быть между ${min}-${max} символами',
      },
      number: {
        len: '${label} должна быть равна ${len}',
        min: '${label} должна быть больше или равна ${min}',
        max: '${label} должна быть меньше или равна ${max}',
      },
      array: {
        len: 'Количество элементов ${label} должно быть равно ${len}',
        min: 'Количество элементов ${label} должно быть больше или равно ${min}',
        max: 'Количество элементов ${label} должно быть меньше или равно ${max}',
        range:
          'Количество элементов ${label} должно быть между ${min} и ${max}',
      },
      pattern: {
        mismatch: '${label} не соответствует шаблону ${pattern}',
      },
    },
  },
  InfoBar,
  Pagination,
  Panel,
  Stepper,
  Table,
  TimePicker,
  Upload,
};

export default localeValues;
