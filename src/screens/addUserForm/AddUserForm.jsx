import React, {useState} from 'react';

import Button from '@material-ui/core/Button';

import * as S from './AddUserForm.styles'

const texts = {
  title: 'New user details',
  cancel: 'Cancel',
  submit: 'Submit to review'
};

const InputId = Object.freeze({
  NAME: 'form-name',
  SURNAME: 'form-surname',
  EMAIL: 'form-email'
});

const AddUserForm = ({ closeAddUserForm }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const inputHandler = e => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    switch(inputId) {
      case InputId.NAME:
        setName(inputValue);
        break;
      case InputId.SURNAME:
        setSurname(inputValue);
        break;
      case InputId.EMAIL:
        setEmail(inputValue);
        break;
      default: return;
    }
  };

  console.table(name,surname,email);

  const isFormValid = name && surname && email;

  return (
    <S.AddUserFormContainer elevation={2}>
      <S.BackButton onClick={closeAddUserForm}/>
      <S.FormWrapper>
        <S.FormTitle variant='h5'>{texts.title}</S.FormTitle>
        <form>
          <S.FormInput
            id='form-name'
            label='Name'
            variant='outlined'
            required={true}
            onChange={inputHandler}
          />
          <S.FormInput
            id='form-surname'
            label='Surname'
            variant='outlined'
            required={true}
            onChange={inputHandler}
          />
          <S.FormInput
            id='form-email'
            label='Email'
            variant='outlined'
            type='email'
            required={true}
            onChange={inputHandler}
          />
          <S.ButtonsWrapper>
            <Button onClick={closeAddUserForm}>{texts.cancel}</Button>
            <S.SubmitButton variant='contained' type='submit' enabled={isFormValid}>{texts.submit}</S.SubmitButton>
          </S.ButtonsWrapper>
        </form>
      </S.FormWrapper>
    </S.AddUserFormContainer>
  );
};

export default AddUserForm;
