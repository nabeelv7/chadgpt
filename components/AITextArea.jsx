'use client';

import {
    AIInput,
    AIInputButton,
    AIInputModelSelect,
    AIInputModelSelectContent,
    AIInputModelSelectItem,
    AIInputModelSelectTrigger,
    AIInputModelSelectValue,
    AIInputSubmit,
    AIInputTextarea,
    AIInputToolbar,
    AIInputTools,
} from '@/components/ui/shadcn-io/ai/input';
import { GlobeIcon, MicIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

const models = [
    { id: 'eren-yeager', name: 'Eren Yeager AI' },
    { id: 'sigma-o1-mini', name: 'Sigma o1 Mini' },
    { id: 'rizzler-v3', name: 'Rizzler v3' },
    { id: 'big-brain', name: 'Big Brain' },
    { id: 'mega-mind', name: 'Mega Mind' },
];


export default function AITextArea() {
    const [text, setText] = useState('');
    const [model, setModel] = useState(models[0].id);
    const [status, setStatus] = useState('ready'); // 'submitted' | 'streaming' | 'ready' | 'error'

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text) return;

        setStatus('submitted');

        setTimeout(() => {
            setStatus('streaming');
        }, 200);

        setTimeout(() => {
            setStatus('ready');
        }, 2000);
    };

    return (
        <AIInput onSubmit={handleSubmit} className="w-150">
            <AIInputTextarea onChange={(e) => setText(e.target.value)} value={text} />
            <AIInputToolbar>
                <AIInputTools>
                    <AIInputButton>
                        <PlusIcon size={16} />
                    </AIInputButton>
                    <AIInputButton>
                        <MicIcon size={16} />
                    </AIInputButton>
                    <AIInputButton>
                        <GlobeIcon size={16} />
                        <span>Search</span>
                    </AIInputButton>
                    <AIInputModelSelect onValueChange={setModel} value={model}>
                        <AIInputModelSelectTrigger>
                            <AIInputModelSelectValue />
                        </AIInputModelSelectTrigger>
                        <AIInputModelSelectContent>
                            {models.map((m) => (
                                <AIInputModelSelectItem key={m.id} value={m.id}>
                                    {m.name}
                                </AIInputModelSelectItem>
                            ))}
                        </AIInputModelSelectContent>
                    </AIInputModelSelect>
                </AIInputTools>
                <AIInputSubmit aria-label="Start or Stop Ai generation" disabled={!text} status={status} />
            </AIInputToolbar>
        </AIInput>
    );
};
