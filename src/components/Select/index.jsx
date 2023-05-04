import { SelectContainer } from './styled';
import { forwardRef } from 'react';

export const SelectCard = forwardRef(({ spanString, ...rest }, ref) => {
    return (
        <SelectContainer>
            <label htmlFor="modulo">Selecione módulo</label>
            <select name="modulo" id="modulo" ref={ref} {...rest}>
                <option value="">Selecione módulo</option>
                <option value="m1">Módulo 1</option>
                <option value="m2">Módulo 2</option>
                <option value="m3">Módulo 3</option>
                <option value="m4">Módulo 4</option>
                <option value="m5">Módulo 5</option>
                <option value="m6">Módulo 6</option>
            </select>
            <span className="spanError">{spanString}</span>
        </SelectContainer>
    );
});
