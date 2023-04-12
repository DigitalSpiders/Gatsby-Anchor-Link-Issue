import { Link } from 'gatsby';
import React from 'react';

const T1Page = (): React.ReactElement => {
  return (
    <div>
      <Link to="/t2/#testanchor">Test anchor</Link>
    </div>
  );
};

export default T1Page;
