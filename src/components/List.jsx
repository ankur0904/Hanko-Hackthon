import { createClient } from '@supabase/supabase-js';
import HighlightTextHero from './HighlightTextHero';
import { useEffect, useState } from 'react';
import Header from './Header';
import userId from '../config/config';

const supabaseUrl = 'https://aysmbympqhddbtawzxrm.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
function List() {
  const [userDir, setUserDir] = useState(''); // Set a default directory
  const [fileList, setFileList] = useState([]);
  const [isButton, setIsButton] = useState(true);

  function handleClick() {
    setUserDir(userId);
    setIsButton(false);
  }

  async function listAllFiles() {
    const { data, error } = await supabase.storage.from('avatars').list(userDir, {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    });
    if (error) {
      console.log(error);
    } else {
      setFileList(data || []); // Handle empty data
    }
  }

  useEffect(() => {
    listAllFiles();
    // Remove the handleClick call as it may be unnecessary
  }, [userDir]);

  console.log(fileList);

  return (
    <>
      <Header />
      <div>
        {fileList.map((item) => (
          <img
            className='images'
            key={item.name}
            src={`https://aysmbympqhddbtawzxrm.supabase.co/storage/v1/object/public/avatars/${userId}/${item.name}`}
            alt=""
          />
        ))}
      </div>

      {isButton && <button className='listImageButton' onClick={handleClick}>Click here to see your content</button>}
    </>
  );
}

export default List;
