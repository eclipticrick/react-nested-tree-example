import React, {useEffect, useState} from 'react';
import TreeItem from "./TreeItem";

function Tree({ url, expanded, depth = 0 }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (expanded) {
            fetch(url)
                .then(res => res.json())
                .then(items => setItems(items))
        }
    }, [expanded]);

    return (
        <div style={{marginLeft: 18}}>
            {items.map(item => <TreeItem key={`nested-${depth}-${item.id}`} item={item} depth={depth}/>)}
        </div>
    );
}

export default Tree;
