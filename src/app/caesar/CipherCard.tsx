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
    const [shiftValue, setShift] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const encryptText = () => {

        const shift = parseInt(shiftValue);

        if (isNaN(shift)) {
            // Handle the case where shiftValue is not a valid number
            console.error('Invalid shift value. Please enter a valid number.');

            return toast({
                title: "Oops, wrong shift key value!",
                description: "Make sure to use a shift value between 0 and 9.",
            });
        }
        const encrypted = text
            .split('')
            .map((char) => {
                if (char.match(/[a-z]/i)) {
                    const code = char.charCodeAt(0);
                    const isUpperCase = char === char.toUpperCase();
                    const shiftedCode = ((code - (isUpperCase ? 65 : 97) + shift) % 26) + (isUpperCase ? 65 : 97);
                    return String.fromCharCode(shiftedCode);
                } else {
                    return char;
                }
            })
            .join('');

        setEncryptedText(encrypted);
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Encipher your Plain Text</CardTitle>
                    <CardDescription>Encipher the plain text using the caesar cipher algorithm.</CardDescription>
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
                        <p className="text-sm text-muted-foreground">
                            Make sure to select a shift key to encipher the plain text.
                        </p>
                    </div>
                </CardContent>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message-3" className='flex'>Shift Key
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Info className="w-3 h-3 ml-1" /></TooltipTrigger>
                                    <TooltipContent>
                                        <pre>
                                            REQUIRED! Must only contain numbers from [1 - 9].
                                        </pre>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Label>
                        <Input
                            type="number"
                            value={shiftValue}
                            onChange={(e) => setShift(e.target.value)}
                            min={0}
                            max={25}
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
