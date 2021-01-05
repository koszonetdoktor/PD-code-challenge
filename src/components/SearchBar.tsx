import React, { ChangeEvent, useState } from "react"
import Button from "./Button"
import Input from "./Input"

type Props = {
    onSearch: (tags: string[]) => void
}

export default function SearchBar({ onSearch }: Props) {
    const [searchText, setSearchText] = useState("")

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const handleSearchClick = () => {
        const tags = searchText.split(" ")
        onSearch(tags)
    }

    return (
        <div>
            <Input value={searchText} onChange={handleSearchChange} />
            <Button disabled={searchText === ""} onClick={handleSearchClick}>
                Search
            </Button>
        </div>
    )
}
