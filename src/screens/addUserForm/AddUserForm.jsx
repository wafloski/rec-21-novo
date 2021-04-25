import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addUser } from '../../redux/actions/usersActions';

import Button from '@material-ui/core/Button';

import * as S from './AddUserForm.styles'

const texts = {
  title: 'New user details',
  cancel: 'Cancel',
  submit: 'Submit to review'
};

const Inputs = Object.freeze({
  NAME: {
    id: 'first_name',
    label: 'Name'
  },
  SURNAME: {
    id: 'last_name',
    label: 'Surname'
  },
  EMAIL: {
    id: 'email',
    label: 'Email'
  }
});

const AddUserForm = ({ closeAddUserForm }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const inputHandler = e => {
    const { id, value } = e.target;
    switch(id) {
      case Inputs.NAME.id:
        setName(value);
        break;
      case Inputs.SURNAME.id:
        setSurname(value);
        break;
      case Inputs.EMAIL.id:
        setEmail(value);
        break;
      default: return;
    }
  };

  const isFormValid = name && surname && email;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser({
      first_name: name,
      last_name: surname,
      email
    }));
    console.log('send');
    closeAddUserForm();
  };

  return (
    <S.AddUserFormContainer elevation={2}>
      <S.BackButton onClick={closeAddUserForm}/>
      <S.FormWrapper>
        <S.FormTitle variant='h5'>{texts.title}</S.FormTitle>
        <form onSubmit={submitHandler}>
          <S.FormInput
            id={Inputs.NAME.id}
            label={Inputs.NAME.label}
            variant='outlined'
            required={true}
            onChange={inputHandler}
          />
          <S.FormInput
            id={Inputs.SURNAME.id}
            label={Inputs.SURNAME.label}
            variant='outlined'
            required={true}
            onChange={inputHandler}
          />
          <S.FormInput
            id={Inputs.EMAIL.id}
            label={Inputs.EMAIL.label}
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
