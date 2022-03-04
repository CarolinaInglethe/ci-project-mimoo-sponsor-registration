import React from 'react';
import ButtonsNextBackForm from './ButtonsNextBackForm';
import NumberPagesForm from './NumberPagesForm';
import GeneralInformationForm from './GeneralInformationForm';
import AccountTypeForm from './AccountTypeForm';
import AccountPlanForm from './AccountPlanForm';

const FormCreateSponsor1 = () => { 
  return (
    <div className="form-create-sponsor-1">
      <NumberPagesForm numberPageActive="1"/>
      
      <form>
        <GeneralInformationForm />
        <AccountTypeForm />
        <AccountPlanForm />
      </form>

      <ButtonsNextBackForm />
    </div>
  )
}

export default FormCreateSponsor1;
