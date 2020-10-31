import { useEffect, useState } from "react";
import ed from 'js-levenshtein';

function Srchr({ searchItems, caseSensitive = true }) {
    const [searchText, setSearchText] = useState(null)
    const [matchedItems, setMatchedItems] = useState([])

    useEffect(() => {
        if (!searchText || searchText.length < 1) {
            setMatchedItems([])
        } else {
            const matches = searchItems.filter(item => {
                if (caseSensitive) {
                    return item.includes(searchText)
                } else {
                    return item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                }
            }).map(match => {
                const dist = ed(match, searchText)
                return [match, dist]
            }).sort((m1, m2) => {
                return m1[1] - m2[1]
            }).map(match => {
                return match[0]
            })
            setMatchedItems(matches)
        }
    }, [searchText, searchItems])

    return (
        <>
            <input type='text' value={searchText} onChange={ev => setSearchText(ev.target.value)}></input>

            <ul>
                {matchedItems.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </>
    );
}

export default Srchr;
