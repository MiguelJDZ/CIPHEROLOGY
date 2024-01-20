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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"



export const CipherCard = () => {

    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const encryptText = () => {
        const encrypted = text
            .toUpperCase()
            .split('')
            .map(char => {
                if (char.match(/[A-Z]/)) {
                    const distanceFromA = char.charCodeAt(0) - 'A'.charCodeAt(0);
                    const reversedChar = String.fromCharCode('Z'.charCodeAt(0) - distanceFromA);
                    return reversedChar;
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
                    <CardTitle>Encipher/ Decipher your Text</CardTitle>
                    <CardDescription>Encipher or Decipher the text using the ATBASH cipher algorithm.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message-2" className='flex'>Text to Encipher/Decipher
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
                        <p className="text-sm text-muted-foreground">
                            Make sure to select a shift key to encipher the plain text.
                        </p>
                    </div>
                </CardContent>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Button onClick={encryptText} type="submit" className="mt-4 w-full">
                            Encipher/Decipher Text
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
