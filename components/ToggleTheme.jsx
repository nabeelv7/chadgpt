'use client'

import { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'

const themes = [
    { id: 'light', name: 'Light' },
    { id: 'dark', name: 'Dark' },
    { id: 'high-contrast', name: 'High Contrast' },
]

export default function ThemeSelector() {
    const [theme, setTheme] = useState('light')

    // On mount, read saved theme from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light'
        setTheme(saved)
        document.body.classList.add(saved)
    }, [])

    // Whenever theme changes, update body class and localStorage
    useEffect(() => {
        document.body.classList.remove('light', 'dark', 'high-contrast')
        document.body.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-40">
                <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent>
                {themes.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                        {t.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
