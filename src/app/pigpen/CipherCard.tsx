"use client"

import React, { useState } from 'react'

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
import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Image from 'next/image';

interface PigpenCipher {
    [key: string]: JSX.Element;
}

import imgA from './images/a.png';

export const CipherCard: React.FC = () => {

    const [text, setText] = useState<string>('');
    const [encryptedText, setEncryptedText] = useState<JSX.Element[]>([]);

    const pigpenCipher: PigpenCipher = {
        A: <Image src={imgA} alt="A" width={20} height={20} />
        // Add similar entries for the rest of the images
    };

    const encryptText = () => {
        const encrypted = text.toUpperCase().split('').map(char => pigpenCipher[char] || char);
        setEncryptedText(encrypted);
    };
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Encipher your Plain Text</CardTitle>
                    <CardDescription>Encipher the plain text using the pigpen cipher algorithm.</CardDescription>
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
                        <Label>Result:</Label>
                        <p>{encryptedText}</p>
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}
