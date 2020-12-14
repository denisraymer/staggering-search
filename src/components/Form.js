import React from 'react';
import useValidateForm from '../hooks/useValidateForm';
import useCalculation from '../hooks/useCalculation';

function Form() {
    const {onChangeInput, inputValue, inputStatus, disable} = useValidateForm()
    const {earlyPayments, onCalculation} = useCalculation()

    return (
        <React.Fragment>
            <div className={inputStatus ? 'form-group form-group_error' : 'form-group'}>
                <label htmlFor='inputSalary' className='form-group__label'>Ваша зарплата в месяц</label>
                <input
                    type='text'
                    className='form-group__input'
                    id='inputSalary'
                    value={inputValue}
                    placeholder='Введите данные'
                    onChange={event => onChangeInput(event)}
                />
                {inputStatus && <div className='form-group__message'>Поле обязательно для заполнения!</div>}
            </div>
            <button className='button button_link' disabled={disable}
                    onClick={() => onCalculation(Number(inputValue.replace(/[^\d]/g, '')))}>Рассчитать
            </button>
            {earlyPayments.length ?
                <div className='modal__title modal__title_small'>Итого можете внести в качестве досрочных:</div> : null}
            {earlyPayments.map((amountTax, number) => {
                return (
                    <div className='form-check modal__form-check' key={number + number}>
                        <label className='form-check__label'>
                            {amountTax.annualTax.toString().replace(/\..*/, '').replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} рублей
                            <span className='form-check__year'> в {number + 1}-ый год</span>
                            <input className='form-check__input' type='checkbox'/>
                            <span className='form-check__mark'/>
                        </label>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Form
