import React, {useState} from 'react';
import Tree from "./Tree";

function TreeItem({item, depth}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <details onClick={() => setExpanded(!expanded)}>
            <summary>{item.name}</summary>
            <Tree url={`https://server.ecliptic.nl/api/fakedata/products?q=${item.id}`} expanded={expanded} depth={depth + 1}/>
        </details>
    );
}

export default TreeItem;
