import { createClient } from '@supabase/supabase-js';
import HighlightTextHero from './HighlightTextHero';
import { useEffect, useState } from 'react';

const supabaseUrl = 'https://aysmbympqhddbtawzxrm.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabaseKey);
function List() {
  const [userDir, setUserDir] = useState(''); // Set a default directory
  const [fileList, setFileList] = useState([]);

  function handleClick() {
    setUserDir('new');
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
      <div>
        {fileList.map((item) => (
          <img
            key={item.name}
            src={`https://aysmbympqhddbtawzxrm.supabase.co/storage/v1/object/public/avatars/new/${item.name}`}
            alt=""
          />
        ))}
      </div>
          <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default List;
