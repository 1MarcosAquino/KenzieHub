import { InputContainer } from './styled';
import { forwardRef } from 'react';

export const InputCard = forwardRef(
    (
        {
            labelString,
            inputId,
            inputType,
            inputPlaceholder,
            spanString,
            ...rest
        },
        ref
    ) => {
        return (
            <InputContainer>
                <label htmlFor={inputId}>{labelString}</label>
                <input
                    id={inputId}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    ref={ref}
                    {...rest}
                />
                <span className="spanError">{spanString}</span>
            </InputContainer>
        );
    }
);
