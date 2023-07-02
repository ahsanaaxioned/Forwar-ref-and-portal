import React from 'react';

const ForRefComp = React.forwardRef((props,ref) => {
    <input type="text" ref = {ref} />
})

export default ForRefComp