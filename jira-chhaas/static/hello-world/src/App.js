import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
// import api, { route, storage } from '@forge/api';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);

        // api.asUser().requestJira(route`/rest/api/3/issue/${storage.issue.key}`).then((response) => {
        //     setData(response);
        // }).catch((error) => {
        //     setData(error);
        // });
    }, []);

    return (
        <div>
            <div>Hello world!</div>
            <div>
                {data && (typeof data === 'object' ? JSON.stringify(data) : data)}
            </div>


            <div>This works in simplest possible way...</div>
        </div>
    );
}

export default App;