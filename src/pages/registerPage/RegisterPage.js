import './RegisterPage.css';
import '../../components/cssStyle/form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../dbCommunication';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [biography, setBiography] = useState();
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    if (!photo) {
      setError('Falta añadir su foto de perfil');
      return;
    }

    try {
      await registerUser({ name, email, biography, photo, password });

      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='formRegisterPage'>
      <form method='post' onSubmit={handleForm}>
        <h1>Register</h1>
        <fieldset>
          <label htmlFor='name' className='formLabel'></label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your name'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='email'></label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='biography'></label>
          <textarea
            value={biography}
            id='biography'
            name='biography'
            maxLength='250'
            placeholder='Your biography'
            required
            onChange={(e) => setBiography(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='photo'></label>
          <input
            type='file'
            id='photo'
            name='photo'
            placeholder='Your photo'
            required
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'></label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className='ButtonRegisterPage'>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
