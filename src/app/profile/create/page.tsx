import { createProfileAction } from '@/actions/create-profile-action';
import FormContainer from '@/components/form/form-container';
import FormInput from '@/components/form/form-input';
import SubmitBtn from '@/components/form/submit-btn';

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold'>New User</h1>
      <div className='max-w-4xl rounded-md border p-8'>
        <FormContainer action={createProfileAction}>
          <div className='mt-4 mb-8 grid gap-4 md:grid-cols-2'>
            <FormInput
              id='firstName'
              label='First Name'
              placeholder='Enter your first name'
            />
            <FormInput
              id='lastName'
              label='Last Name'
              placeholder='Enter your last name'
            />
            <FormInput
              id='username'
              label='Username'
              placeholder='Enter your username'
            />
          </div>
          <SubmitBtn label='Create Profile' />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfilePage;
