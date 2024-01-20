"use client"

import React, { useState, useEffect } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const CipherCard: React.FC = () => {

    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [randomAlphabet, setRandomAlphabet] = useState<string[]>([]);

    useEffect(() => {
        generateRandomAlphabet();
    }, []);

    const generateRandomAlphabet = () => {
        const originalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const shuffledAlphabet = originalAlphabet.split('').sort(() => Math.random() - 0.5);
        setRandomAlphabet(shuffledAlphabet);
        return toast({
            title: "New Alphabet has been generated!",
            description: "The Kama-sutra cipher can be done using different alphabet orders.",
        });
    };

    const encryptText = () => {
        const encrypted = text
            .toUpperCase()
            .split('')
            .map(char => {
                const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
                if (index >= 0 && index < 26) {
                    return randomAlphabet[index];
                }
                return char;
            })
            .join('');
        setEncryptedText(encrypted);
    };
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Encipher your Plain Text</CardTitle>
                    <CardDescription>Encipher the plain text using the kama-sutra cipher algorithm.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message-2" className='flex'>Plain Text to Encipher
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Info className="w-3 h-3 ml-1" /></TooltipTrigger>
                                    <TooltipContent>
                                        <pre>
                                            REQUIRED! Must only contain letters from [A - Z].
                                        </pre>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Label>
                        <Textarea
                            placeholder="Type your text here."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                </CardContent>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Button onClick={encryptText} type="submit" className="mt-4 w-full">
                            Encipher Plain Text
                        </Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="grid w-full gap-1.5">
                        <div>
                            <Label>Result:</Label>
                            <p>{encryptedText}</p>
                        </div>
                        <Button onClick={generateRandomAlphabet} type="submit" className="mt-4 w-full">
                            Generate New Alphabet
                        </Button>
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}
