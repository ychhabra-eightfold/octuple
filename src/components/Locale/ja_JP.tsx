/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../LocaleProvider';
import DatePicker from '../DateTimePicker/DatePicker/Locale/ja_JP';
import Dialog from '../Dialog/BaseDialog/Locale/ja_JP';
import InfoBar from '../InfoBar/Locale/ja_JP';
import Pagination from '../Pagination/Locale/ja_JP';
import Panel from '../Panel/Locale/ja_JP';
import Stepper from '../Stepper/Locale/ja_JP';
import Table from '../Table/Locale/ja_JP';
import TimePicker from '../DateTimePicker/TimePicker/Locale/ja_JP';
import Upload from '../Upload/Locale/ja_JP';

const typeTemplate = '${label}は有効な${type}ではありません';

const localeValues: Locale = {
  locale: 'ja',
  DatePicker,
  Dialog,
  Form: {
    defaultValidateMessages: {
      default: '${label}のフィールド検証エラー',
      required: '${label}を入力してください',
      enum: '${label}は[${enum}]のいずれかである必要があります',
      whitespace: '${label}は空白文字にすることはできません',
      date: {
        format: '${label}の日付形式は不正です',
        parse: '${label}は日付に変換できません',
        invalid: '${label}は不正な日付です',
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
        len: '${label}は${len}文字である必要があります',
        min: '${label}は${min}文字以上である必要があります',
        max: '${label}は${max}文字以下である必要があります',
        range: '${label}は${min}-${max}文字の範囲である必要があります',
      },
      number: {
        len: '${label}は${len}と等しい必要があります',
        min: '${label}の最小値は${min}です',
        max: '${label}の最大値は${max}です',
        range: '${label}は${min}-${max}の範囲である必要があります',
      },
      array: {
        len: '${label}は${len}である必要があります',
        min: '${label}の最小は${min}です',
        max: '${label}の最大は${max}です',
        range: '${label}の合計は${min}-${max}の範囲である必要があります',
      },
      pattern: {
        mismatch: '${label}はパターン${pattern}と一致しません',
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
