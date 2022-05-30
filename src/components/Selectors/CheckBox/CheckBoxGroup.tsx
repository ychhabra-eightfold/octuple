import React, { FC } from 'react';
import { CheckBox } from './CheckBox';
import { generateId, mergeClasses } from '../../../shared/utilities';
import { CheckboxGroupProps } from './Checkbox.types';

import styles from './checkbox.module.scss';

export const CheckBoxGroup: FC<CheckboxGroupProps> = ({
    items = [],
    onChange,
    value,
    classNames,
    'data-test-id': dataTestId,
    style,
}) => {
    const checkboxGroupClassNames = mergeClasses([
        styles.checkboxGroup,
        classNames,
    ]);

    return (
        <div
            className={checkboxGroupClassNames}
            data-test-id={dataTestId}
            style={style}
        >
            {items.map((item) => (
                <CheckBox
                    {...item}
                    checked={value.includes(item.value)}
                    id={item.id || generateId()}
                    key={item.value}
                    onChange={() => {
                        const optionIndex = value.indexOf(item.value);
                        const newValue = [...value];
                        if (optionIndex === -1) {
                            newValue.push(item.value);
                        } else {
                            newValue.splice(optionIndex, 1);
                        }
                        onChange?.(newValue);
                    }}
                />
            ))}
        </div>
    );
};
