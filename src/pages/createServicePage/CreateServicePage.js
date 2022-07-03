import { useContext, useState } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { createNewService } from '../../dbCommunication';
import { useNavigate } from 'react-router-dom';

export const CreateServicePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();
  const [file, setFile] = useState(null);
  const [statusService, setStatusService] = useState('pending');
  const [error, setError] = useState('');
  const [creating, setCreating] = useState(false);

  const navigate = useNavigate();
  const { token } = useContext(TokenContext);

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setCreating(true);

      await createNewService({
        title,
        description,
        file,
        statusService,
        token,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setCreating(false);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleForm}>
      <fieldset>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='The title'
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          placeholder='The description'
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor='file'>File</label>
        <input
          type='file'
          id='file'
          name='file'
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
      </fieldset>

      <fieldset>
        <label htmlFor='statusService'>Status service</label>
        <select
          type='statusService'
          id='statusService'
          name='statusService'
          placeholder='Your status'
          required
          onChange={(e) => setStatusService(e.target.value)}
        >
          <option value='pending'>Pending</option>
          <option value='resolved'>Resolved</option>
        </select>
      </fieldset>

      <button>Create</button>

      {creating ? <p>Creating Service</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
